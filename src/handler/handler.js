const UserSchema = require('../models/userSchema');
const dataset = require('../models/dataset');
const DataSchema = require('../models/dataSchema');
const {PythonShell} = require('python-shell');
const {activRepair} = require('../config/renew');

const getAllActivityHandler = async (request, h) => {
  try {
    const activityList = await DataSchema.findById('6298c29c5817e187d11f28df');
    const response = h.response({
      status: 'success',
      data: {
        Activities: activityList.activities,
      },
    });
    return response;
  } catch (error) {
    const response = h.response({
      status: 'error',
      message: error.message || 'Data not found',
    });
    response.code(404);
    return response;
  }
};

const addActivityByIdHandler = async (request, h) => {
  // const dataClient = await UserSchema.findById(request.params.id);
  const pyshell = new PythonShell('./src/scripts/foodinApp.py', {mode: 'text'});
  const {activities} = request.payload;
  let message = '';

  try {
    const newActivities = activRepair(activities);
    await UserSchema.updateOne(
        {_id: request.params.id},
        {
          $set: {activities: newActivities},
          $currentDate: {lastModified: true},
        },
    );
    const dataSave = await UserSchema.findById(request.params.id);

    const myPromise = new Promise((reject, resolve) => {
      const dataString = JSON.stringify(dataSave);
      pyshell.send(dataString);
      pyshell.on('message', function(err, message) {
        if (err) reject(err);
        else {
          resolve(message);
        }
      });
      pyshell.end(function(err) {
        if (err) {
          console.log(err);
        };
      });
    });

    message = await myPromise;
    newMessage = message.replace(/'/g, '"');
    messageJson = JSON.parse(newMessage);
    const foodLists = Object.values(messageJson.foodLists.foodLists);

    await UserSchema.updateOne(
        {email: dataSave.email},
        {
          $set: {
            totalCalories: messageJson.totalCalories,
            foodLists: foodLists},
          $currentDate: {lastModified: true},
        },
    );

    const response = h.response({
      status: 'success',
      message: 'Inserting data success',
      data: {
        activities,
      },
    });
    response.code(201);
    return response;
  } catch (error) {
    const response = h.response({
      status: 'error',
      message: error.message || 'Inserting data failed',
    });
    response.code(500);
    return response;
  }
};

const getCaloryByIdHandler = async (request, h) => {
  try {
    const datasSave = await UserSchema.findById(request.params.id);
    const response = h.response({
      status: 'success',
      data: {
        totalCalories: datasSave.totalCalories,
      },
    });
    return response;
  } catch (error) {
    const response = h.response({
      status: 'error',
      message: error.message || 'Data not found',
    });
    response.code(404);
    return response;
  };
};

const getFoodByIdHandler = async (request, h) => {
  try {
    const dataSave = await UserSchema.findById(request.params.id);
    // const displayFood = dataSave.foodLists.map((foodList) => ({
    //   food: foodList.food,
    //   vegetable: foodList.vegetable,
    //   fruit: foodList.fruit,
    // }));

    const foodLists = Object.values(dataSave.foodLists);
    const displayFood = [];

    for (i=0; i<3; i++) {
      let breakfast = foodLists[i].breakfast;
      let brunch = foodLists[i].brunch;
      let lunch = foodLists[i].lunch;
      let dinner = foodLists[i].dinner;

      if (typeof(foodLists[i].breakfast) == 'undefined') {
        breakfast = '';
      }
      if (typeof(foodLists[i].brunch) == 'undefined') {
        brunch = '';
      }
      if (typeof(foodLists[i].lunch) == 'undefined') {
        lunch = '';
      }
      if (typeof(foodLists[i].dinner) == 'undefined') {
        dinner = '';
      }
      displayFood.push({
        breakfast: breakfast,
        brunch: brunch,
        lunch: lunch,
        dinner: dinner,
      });
    }

    const response = h.response({
      status: 'success',
      data: {
        foodLists: displayFood,
      },
    });
    response.code(200);
    return response;
  } catch (error) {
    const response = h.response({
      status: 'error',
      message: error.message || 'Food recommendation not found',
    });
    response.code(404);
    return response;
  }
};

const addActivityListsHandler = async (request, h) => {
  const totalActivities = dataset.Activities.length;

  const activities = [];
  for (let i = 0; i < totalActivities; i++) {
    activities.push({
      activityName: dataset.Activities[i],
    });
  }
  console.log(activities);

  try {
    await DataSchema.updateOne(
        {_id: request.params.id},
        {
          $set: {activities: activities},
        },
    );
    const response = h.response({
      status: 'success',
      message: 'successfully inserting data',
      data: {
        activities,
      },
    });
    // console.log(Activities);
    response.code(201);
    return response;
  } catch (error) {
    const response = h.response({
      status: 'error',
      message: error.message || 'Failed to insert data',
    });
    response.code(500);
    return response;
  }
};

const testHandler = async (request, h) => {
  const pyshell = new PythonShell('./src/scripts/foodinApp.py', {mode: 'text'});
  // await pyshell.on('message', handleMessage);
  // function handleMessage(message) {
  //   console.log(message);
  //   return message;
  // };
  let message = '';

  const myPromise = new Promise((reject, resolve) => {
    const data = {
      email: 'bubu@gmail.com',
      password: '1234567',
      name: 'bubu',
      weightCurrent: 50,
      height: 180,
      gender: 'male',
      age: 26,
      goals: 'gain',
      activities: [
        {
          'activityName': 110,
          'kind': '',
          'duration': 0.5,
        },
        {
          'activityName': 2,
          'kind': 'b',
          'duration': 2,
        }],
    };
    const testjson = JSON.stringify(data);
    pyshell.send(testjson);
    console.log(testjson);
    pyshell.on('message', function(err, message) {
      if (err) reject(err);
      else {
        resolve(message);
      }
    });
    pyshell.end(function(err) {
      if (err) {
        console.log(err);
      };
    });
  });

  message = await myPromise;
  newMessage = message.replace(/'/g, '"');
  messageJson = JSON.parse(newMessage);

  const response = h.response({
    status: 'success',
    data: {
      messageJson,
    },
  });
  response.code(201);
  return response;
};

module.exports = {
  getCaloryByIdHandler,
  getAllActivityHandler,
  addActivityByIdHandler,
  getFoodByIdHandler,
  addActivityListsHandler,
  testHandler,
};

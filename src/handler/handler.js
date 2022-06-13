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
  const pyshell = new PythonShell('./src/scripts/foodinApp.py', {mode: 'text'});

  const activities = [];
  activities.push({
    activityName: request.payload.activityName,
    duration: request.payload.duration,
  });
  console.log(activities);
  let message = '';

  try {
    const newActivities = activRepair(activities);
    console.log(newActivities);
    const dataSave = await UserSchema.findById(request.params.id);

    const storeActive = dataSave.activities;

    storeActive.push(newActivities[0]);

    await userSchema.replaceOne(
        {_id: request.params.id},
        {
          _id: request.params.id,
          email: dataSave.email,
          password: dataSave.password,
          name: dataSave.name,
          weightCurrent: dataSave.weightCurrent,
          height: dataSave.height,
          gender: dataSave.gender,
          age: dataSave.age,
          goals: dataSave.goals,
          activities: storeActive,
          totalCalories: dataSave.totalCalories,
          foodLists: dataSave.foodLists,
        },
    );

    const dataSave2 = await UserSchema.findById(request.params.id);
    console.log(dataSave2);

    const myPromise = new Promise((reject, resolve) => {
      const dataString = JSON.stringify(dataSave2);
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

    const foodLists = dataSave.foodLists;
    const displayFood = [];

    for (i=0; i<3; i++) {
      const breakfastVal = typeof(Object.values(foodLists[i].breakfast)[i]);
      const brunchVal = typeof(Object.values(foodLists[i].brunch)[i]);
      const lunchVal = typeof(Object.values(foodLists[i].lunch)[i]);

      if (breakfastVal == 'undefined' && lunchVal == 'undefined') {
        const breakfast = {
          food: '-',
          vegetable: '-',
          fruit: '-',
        };
        const lunch = {
          food: '-',
          vegetable: '-',
          fruit: '-',
        };
        displayFood.push({
          breakfast: breakfast,
          brunch: foodLists[i].brunch,
          lunch: lunch,
          dinner: foodLists[i].dinner,
        });
      }
      if (brunchVal == 'undefined') {
        const brunch = {
          food: '-',
          vegetable: '-',
          fruit: '-',
        };
        displayFood.push({
          breakfast: foodLists[i].breakfast,
          brunch: brunch,
          lunch: foodLists[i].lunch,
          dinner: foodLists[i].dinner,
        });
      }
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

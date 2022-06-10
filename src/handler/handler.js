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
  // const pyshell = new PythonShell('./src/scripts/test.py', {mode: 'json'});
  const {activities} = request.payload;
  const message = '';

  try {
    const newActivities = activRepair(activities);

    await UserSchema.updateOne(
        {_id: request.params.id},
        {
          $set: {activities: newActivities},
          $currentDate: {lastModified: true},
        },
    );
    // const dataSave = await UserSchema.findById(request.params.id);

    // const myPromise = new Promise((reject, resolve) => {
    //   const dataString = JSON.stringify(dataSave);
    //   pyshell.send(dataString);
    //   pyshell.on('message', function(err, message) {
    //     if (err) reject(err);
    //     else {
    //       console.log(message);
    //       resolve(message);
    //     }
    //   });
    //   pyshell.end(function(err) {
    //     if (err) {
    //       console.log(err);
    //     };
    //   });
    // });

    // message = await myPromise;
    // console.log(message);

    // await UserSchema.updateOne(
    //     {email: saveUser.email},
    //     {
    //       $set: {foodLists: message},
    //       $currentDate: {lastModified: true},
    //     },
    // );

    const response = h.response({
      status: 'success',
      message: 'Inserting data success',
      data: {
        newActivities,
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

    const displayFood = Object.values(dataSave.foodLists);
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
  const pyshell = new PythonShell('./src/scripts/test.py', {mode: 'text'});

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
    };
    const testjson = JSON.stringify(data);
    pyshell.send(testjson);
    console.log(testjson);
    pyshell.on('message', function(err, message) {
      if (err) reject(err);
      else {
        console.log(message);
        // a=(message);
        // console.log(`${a}1`);
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
  // messageJson = JSON.parse(message);
  console.log('AA');
  console.log(message);
  // console.log('iyes');

  const response = h.response({
    status: 'success',
    data: {
      message,
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

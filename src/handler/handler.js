const UserSchema = require('../models/userSchema');
const dataset = require('../models/dataset');
const DataSchema = require('../models/dataSchema');
const dataSchema = require('../models/dataSchema');

const getAllActivityHandler = async (request, h) => {
  try {
    const activityList = await dataSchema.findById('6298c29c5817e187d11f28df');
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
  const {activities} = request.payload;
  try {
    await UserSchema.updateOne(
        {_id: request.params.id},
        {
          $set: {activities: activities},
          $currentDate: {lastModified: true},
        },
    );
    // const dataSave = await dataClient.save();

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


module.exports = {
  getCaloryByIdHandler,
  getAllActivityHandler,
  addActivityByIdHandler,
  getFoodByIdHandler,
  addActivityListsHandler,
};

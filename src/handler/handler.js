const UserSchema = require('../models/userSchema');
const dataset = require('../models/dataset');

const getAllActivityHandler = async (request, h) => {
  try {
    console.log(dataset);
    const activityList = await dataset.Activities;
    const response = h.response({
      status: 'success',
      data: {
        Activities: activityList,
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
      message: 'Data berhasil ditambahkan',
      data: {
        activities,
      },
    });
    response.code(201);
    return response;
  } catch (error) {
    const response = h.response({
      status: 'error',
      message: error.message || 'Data gagal ditambahkan',
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


module.exports = {
  getCaloryByIdHandler,
  getAllActivityHandler,
  addActivityByIdHandler,
  getFoodByIdHandler,
};

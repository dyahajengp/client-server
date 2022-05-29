const DataSchema = require('../models/dataSchema');
// const UserSchema = require('../models/userSchema');
const dataset = require('../models/dataset');
// const verifyToken = require('../config/verifyToken');

const getAllActivityHandler = async (request, h) => {
  try {
    const activityList = await dataset.Activities;
    return h.response(activityList);
  } catch (error) {
    const response = h.response({
      status: 'error',
      message: error.message || 'Data not found',
    });
    response.code(404);
    return response;
  }
};

// const addDataUserHandler = async (request, h) => {
//   try {
//     const dataSave = await UserSchema.findById(request.params.id);
//     const dataSave = await dataClient.save();

//     const response = h.response({
//       status: 'success',
//       message: 'Data berhasil ditambahkan',
//       data: {
//         dataSave,
//       },
//     });
//     response.code(201);
//     return response;
//   } catch (error) {
//     h.response(error).code(500).send({
//       message: error.message || 'Data gagal ditambahkan',
//     });
//   }
// };

// const addActivityByIdHandler = async (request, h) => {
//   try {
//     const dataClient = new DataSchema.findById(request.params.id);
//     const dataSave = await dataClient.save();

//     const response = h.response({
//       status: 'success',
//       message: 'Data berhasil ditambahkan',
//       data: {
//         dataSave,
//       },
//     });
//     response.code(201);
//     return response;
//   } catch (error) {
//     h.response(error).code(500).send({
//       message: error.message || 'Data gagal ditambahkan',
//     });
//   }
// };

const getCaloryByIdHandler = async (request, h) => {
  try {
    const datasSave = await DataSchema.findById(request.params.id);
    return h.response(datasSave.calories);
  } catch (error) {
    h.response(error).code(404).send({
      message: error.message || 'Data not found',
    });
  }
};

const getActivityByIdHandler = async (request, h) => {
  try {
    const dataSave = await DataSchema.findById(request.params.id);
    const displayActivities = dataSave.activities.map((activity) => ({
      activity: activity.activityName,
      duration: activity.duration,
    }));

    const response = h.response({
      status: 'success',
      data: {
        displayActivities,
      },
    });
    response.code(200);
    return response;
  } catch (error) {
    const response = h.response({
      status: 'error',
      message: error.message || 'Activities not found',
    });
    response.code(404);
    return response;
  }
};

const getFoodByIdHandler = async (request, h) => {
  try {
    const dataSave = await DataSchema.findById(request.params.id);
    const displayFood = dataSave.foodLists.map((foodList) => ({
      food: foodList.food,
      vegetable: foodList.vegetable,
      fruit: foodList.fruit,
    }));

    const response = h.response({
      status: 'success',
      data: {
        displayFood,
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
  // addDataUserHandler,
  getCaloryByIdHandler,
  getAllActivityHandler,
  // addActivityByIdHandler,
  getActivityByIdHandler,
  getFoodByIdHandler,
};

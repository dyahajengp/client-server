const DataSchema = require('./models/dataSchema');

const addClientHandler = async (request, h) => {
  try {
    const dataClient = new DataSchema(request.payload);
    const dataSave = await dataClient.save();

    const response = h.response({
      status: 'success',
      message: 'Data berhasil ditambahkan',
      data: {
        dataSave,
      },
    });
    response.code(201);
    return response;
  } catch (error) {
    h.response(error).code(500).send({
      message: error.message || 'Data gagal ditambahkan',
    });
  }
};

const getAllClientHandler = async (request, h) => {
  try {
    const datasSave = await DataSchema.find();
    return h.response(datasSave);
  } catch (error) {
    return h.response(error).code(500);
  }
};

const getClientByIdHandler = async (request, h) => {
  try {
    const dataSave = await DataSchema.findById(request.params.id);
    return h.response(dataSave);
  } catch (error) {
    h.response(error).code(404).send({
      message: error.message || 'Data tidak ditemukan',
    });
  }
};

module.exports = {addClientHandler, getAllClientHandler, getClientByIdHandler};

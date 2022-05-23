const {nanoid} = require('nanoid');
const clients = require('./client');

const addClientHandler = (request, h) => {
  const {
    weightCurrent, height, gender, allergy, age, activities, weightGoal,
  } = request.payload;

  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newClient = {
    weightCurrent,
    height,
    gender,
    allergy,
    age,
    activities,
    weightGoal,
    id,
    createdAt,
    updatedAt,
  };

  clients.push(newClient);

  const isSuccess = clients.filter((client) => client.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Data berhasil ditambahkan',
      data: {
        clientId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Data gagal ditambahkan',
  });
  response.code(500);
  return response;
};

const getAllClientHandler = () => ({
  status: 'success',
  data: {
    clients,
  },
});

const getClientByIdHandler = (request, h) => {
  const {id} = request.params;

  const client = clients.filter((n) => n.id === id)[0];

  if (client !== undefined) {
    return {
      status: 'success',
      data: {
        clients,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Data tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {addClientHandler, getAllClientHandler, getClientByIdHandler};

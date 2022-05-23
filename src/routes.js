const {
  addClientHandler,
  getAllClientHandler,
  getClientByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/client',
    handler: addClientHandler,
  },
  {
    method: 'GET',
    path: '/client',
    handler: getAllClientHandler,
  },
  {
    method: 'GET',
    path: '/client/{id}',
    handler: getClientByIdHandler,
  },
];

module.exports = routes;

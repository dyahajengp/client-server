const {
  getCaloryByIdHandler,
  getAllActivityHandler,
  addActivityByIdHandler,
  getFoodByIdHandler,
  addActivityListsHandler,
  testHandler,
} = require('./handler/handler');

const {
  regisClientHandler,
  loginClientHandler,
} = require('./handler/auth');

const routes = [
  {
    method: 'POST',
    path: '/regis',
    config: {auth: false},
    handler: regisClientHandler,
  },
  {
    method: 'POST',
    path: '/login',
    config: {auth: false},
    handler: loginClientHandler,
  },
  {
    method: 'GET',
    path: '/home/{id}',
    config: {auth: 'jwt'},
    handler: getCaloryByIdHandler,
  },
  {
    method: 'GET',
    path: '/activities',
    config: {auth: false},
    handler: getAllActivityHandler,
  },
  {
    method: 'POST',
    path: '/home/activities/{id}',
    config: {auth: 'jwt'},
    handler: addActivityByIdHandler,
  },
  {
    method: 'GET',
    path: '/foods/{id}',
    config: {auth: 'jwt'},
    handler: getFoodByIdHandler,
  },
  {
    method: 'POST',
    path: '/activities/{id}',
    config: {auth: false},
    handler: addActivityListsHandler,
  },
  {
    method: 'GET',
    path: '/test',
    config: {auth: false},
    handler: testHandler,
  },
];

module.exports = routes;

const {
  getCaloryByIdHandler,
  getAllActivityHandler,
  // addActivityByIdHandler,
  getActivityByIdHandler,
  getFoodByIdHandler,
} = require('./handler/handler');

const {
  regisClientHandler,
  loginClientHandler,
} = require('./handler/auth');

const routes = [
  {
    method: 'POST',
    path: '/regis',
    handler: regisClientHandler,
  },
  {
    method: 'POST',
    path: '/login',
    handler: loginClientHandler,
  },
  {
    method: 'GET',
    path: '/home/{id}',
    handler: getCaloryByIdHandler,
  },
  {
    method: 'GET',
    path: '/activities',
    handler: getAllActivityHandler,
  },
  // {
  //   method: 'POST',
  //   path: '/activities/{id}',
  //   handler: addActivityByIdHandler,
  // },
  {
    method: 'GET',
    path: '/activities/{id}',
    handler: getActivityByIdHandler,
  },
  {
    method: 'GET',
    path: '/foods/{id}',
    handler: getFoodByIdHandler,
  },

];

module.exports = routes;

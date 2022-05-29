const server = require('../server');
const routes = require('../routes');

const verifyToken = server.register([{
  register: require('hapi-auth-jwt'),
}], function(err) {
  server.auth.strategy('token', 'jwt', {
    validateFunc: validate,
    key: privateKey,
  });

  server.route(routes);
});

module.exports = verifyToken;

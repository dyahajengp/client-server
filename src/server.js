const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const mongoose = require('mongoose');
const userSchema = require('./models/userSchema');
require('dotenv').config();

const validate = async function(decoded, request, h) {
  if (decoded._id==userSchema._id) {
    return {isValid: false};
  } else {
    return {isValid: true};
  }
};

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  const db = process.env.MONGO_URL;
  await mongoose.connect(db, {
    useNewUrlParser: true, useUnifiedTopology: true,
  })
      .then(() => {
        console.log('connected to mongodb atlas');
      }).catch((error) => {
        console.log('Something wrong happened', error);
      });

  await server.register(require('hapi-auth-jwt2'));
  server.auth.strategy('jwt', 'jwt', {
    key: process.env.PRIVATE_KEY,
    validate: validate,
  });

  server.auth.default('jwt');
  server.route(routes);
  await server.start();
  return server;
};

init().then((server) => {
  console.log('Server running at:', server.info.uri);
})
    .catch((err) => {
      console.log(err);
    });

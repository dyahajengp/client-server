const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const routes = require('./routes');
require('dotenv').config();

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
  mongoose.connect(db, {
    useNewUrlParser: true, useUnifiedTopology: true,
  })
      .then(() => {
        console.log('connected to mongodb atlas');
      }).catch((error) => {
        console.log('Something wrong happened', error);
      });

  // server.register([{
  //   register: require('hapi-auth-jwt'),
  // }], function(err) {
  //   server.auth.strategy('token', 'jwt', {
  //     validateFunc: validate,
  //     key: privateKey,
  //   });

  //   server.route(routes);
  // });
  server.route(routes);

  await server.start();
  console.log(`Server url :  ${server.info.uri}`);
};

init();

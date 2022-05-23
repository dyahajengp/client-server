const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const routes = require('./routes');

const username = encodeURIComponent('ajeng');
const password = encodeURIComponent('ajeng');
const mongodb = `mongodb+srv://${username}:${password}@cluster0.fotmt.mongodb.net/foodinApp?retryWrites=true&w=majority`;

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  mongoose.connect(mongodb, {useNewUrlParser: true})
      .then(() => {
        console.log('connected to mongodb atlas');
      }).catch((error) => {
        console.log('Something wrong happened', error);
      });

  server.route(routes);

  await server.start();
  console.log(`Server url :  ${server.info.uri}`);
};

init();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserSchema = require('../models/userSchema');
const {validateRegistration} = require('../config/validation');
const {PythonShell} = require('python-shell');

const regisClientHandler = async (request, h) => {
  const {error} = validateRegistration(request.payload);
  if (error) {
    const response = h.response({
      status: 'error',
      message: error.details[0].message,
    });
    response.code(400);
    return response;
  }

  // if email exist
  const emailExist = await UserSchema.findOne({email: request.payload.email});
  if (emailExist) {
    const response = h.response({
      status: 'error',
      message: 'Email already registered!',
    });
    response.code(500);
    return response;
  }

  // encrypt password
  const generator = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(request.payload.password, generator);
  const pyshell = new PythonShell('./src/scripts/foodinApp.py', {mode: 'text'});

  const user = new UserSchema({
    email: request.payload.email,
    password: hashPassword,
    name: request.payload.name,
    weightCurrent: request.payload.weightCurrent,
    height: request.payload.height,
    gender: request.payload.gender,
    age: request.payload.age,
    goals: request.payload.goals,
  });

  let message = '';

  try {
    const saveUser = await user.save();

    const myPromise = new Promise((reject, resolve) => {
      const data = saveUser;
      const dataString = JSON.stringify(data);
      pyshell.send(dataString);
      pyshell.on('message', function(err, message) {
        if (err) reject(err);
        else {
          resolve(message);
        }
      });
      pyshell.end(function(err) {
        if (err) {
          console.log(err);
        };
      });
    });

    message = await myPromise;
    newMessage = message.replace(/'/g, '"');
    messageJson = JSON.parse(newMessage);
    console.log(messageJson.foodLists.foodLists);
    const foodLists = Object.values(messageJson.foodLists.foodLists);
    console.log(foodLists);

    await UserSchema.updateOne(
        {email: saveUser.email},
        {
          $set: {
            totalCalories: messageJson.totalCalories,
            foodLists: foodLists},
          $currentDate: {lastModified: true},
        },
    );

    const response = h.response({
      status: 'success',
      message: 'successfully created account',
      data: {
        saveUser,
      },
    });
    response.code(201);
    return response;
  } catch (error) {
    const response = h.response({
      status: 'error',
      message: error.message || 'failed to create account',
    });
    response.code(500);
    return response;
  }
};

const loginClientHandler = async (request, h) => {
  const user = await UserSchema.findOne({email: request.payload.email});
  if (!user) {
    const response = h.response({
      status: 'error',
      message: 'The email is wrong!',
    });
    response.code(400);
    return response;
  }

  const checkPw = await bcrypt.compare(request.payload.password, user.password);
  if (!checkPw) {
    const response = h.response({
      status: 'error',
      message: 'The password is wrong!',
    });
    response.code(400);
    return response;
  }

  const id = await user._id;

  const jwtoken = jwt.sign({_id: user._id}, process.env.PRIVATE_KEY);
  const response = h.response({
    status: 'success',
    message: 'login success',
    data: {
      id: id,
      token: jwtoken,
    },
  });
  return response;
};

module.exports = {regisClientHandler, loginClientHandler};

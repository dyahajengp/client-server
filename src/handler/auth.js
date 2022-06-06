const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserSchema = require('../models/userSchema');
const {validateRegistration} = require('../config/validation');

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

  const user = new UserSchema({
    email: request.payload.email,
    password: hashPassword,
    weightCurrent: request.payload.weightCurrent,
    height: request.payload.height,
    gender: request.payload.gender,
    age: request.payload.age,
    goals: request.payload.goals,
  });

  try {
    const saveUser = await user.save();
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

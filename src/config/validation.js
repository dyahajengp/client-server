const joi = require('joi');

const validateRegistration = (dataUser) => {
  const userSchemas = joi.object({
    email: joi.string()
        .email()
        .required(),
    password: joi.string()
        .min(6)
        .required(),
    name: joi.string()
        .required(),
    weightCurrent: joi.number()
        .required(),
    height: joi.number()
        .required(),
    gender: joi.string()
        .required(),
    age: joi.number()
        .required(),
    goals: joi.string()
        .required(),
    activities: joi.array(),
    totalCalories: joi.number(),
    foodList: joi.array(),
  });
  return userSchemas.validate(dataUser);
};

module.exports = {
  validateRegistration,
};

const joi = require('joi');

const validateRegistration = (dataUser) => {
  const userSchemas = joi.object({
    name: joi.string()
        .required(),
    email: joi.string()
        .email()
        .required(),
    password: joi.string()
        .min(6)
        .required(),
  });
  return userSchemas.validate(dataUser);
};

module.exports = {
  validateRegistration,
};

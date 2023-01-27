const Joi = require('joi');

const user = {
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  phone: Joi.string().required(),
  city: Joi.string().required(),
};

const signupUserSchema = Joi.object({
  name: user.name,
  email: user.email,
  password: user.password,
  phone: user.phone,
  city: user.city,
}).required();

const loginUserSchema = Joi.object({
  email: user.email,
  password: user.password,
}).required();

const updateUserSchema = Joi.object({
  email: user.email.optional(),
  password: user.password.optional(),
  phone: user.phone.optional(),
  city: user.city.optional(),
}).required();

const verifyEmailSchema = Joi.object({
  email: user.email,
});

module.exports = {
  signupUserSchema,
  loginUserSchema,
  updateUserSchema,
  verifyEmailSchema,
};

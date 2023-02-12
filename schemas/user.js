const Joi = require('joi');
const { regexDate, regexPhone } = require('../consts');

const user = {
  name: Joi.string(),
  email: Joi.string(),
  password: Joi.string().alphanum().min(7).max(32),
  avatarUrl: Joi.string(),
  birthdate: Joi.string().pattern(new RegExp(regexDate)),
  phone: Joi.string().pattern(new RegExp(regexPhone)),
  city: Joi.string(),
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
  name: user.name,
  email: user.email,
  password: user.password,
  avatarUrl: user.avatarUrl,
  birthdate: user.birthdate,
  phone: user.phone,
  city: user.city,
}).required();

const verifyEmailSchema = Joi.object({
  email: user.email,
});

const resetPasswordSchema = Joi.object({
  password: user.password,
});

const emailSchema = Joi.object({
  email: user.email,
});

module.exports = {
  signupUserSchema,
  loginUserSchema,
  updateUserSchema,
  verifyEmailSchema,
  resetPasswordSchema,
  emailSchema,
};

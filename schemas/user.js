const Joi = require('joi');

const user = {
  name: Joi.string(),//.required(),
  email: Joi.string()/*.required()*/.email(),
  password: Joi.string()/*.required()*/.alphanum().min(7).max(32),
  avatarUrl: Joi.string().optional(),
  birthdate: Joi.string()
    .optional()
    .pattern(new RegExp('(0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[012]).(19|20)')),
  phone: Joi.string()
    //.required()
    .pattern(
      new RegExp('^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$')
    ),
  city: Joi.string()//.required(),
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
  name: user.name.optional(),
  email: user.email.optional(),
  password: user.password.optional(),
  avatarUrl: user.avatarUrl.optional(),
  birthdate: user.birthdate,
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

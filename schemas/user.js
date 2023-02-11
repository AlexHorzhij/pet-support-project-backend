const Joi = require('joi');

const user = {
  name: Joi.string().optional(),
  email: Joi.string().optional(),
  password: Joi.string().alphanum().min(7).max(32).optional(),
  avatarUrl: Joi.string().optional(),
  birthdate: Joi.string()
    .optional()
    .pattern(new RegExp('(0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[012]).(19|20)')),
  phone: Joi.string()
    .optional()
    .pattern(
      new RegExp('^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$')
    ),
  city: Joi.string().optional(),
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
})

module.exports = {
  signupUserSchema,
  loginUserSchema,
  updateUserSchema,
  verifyEmailSchema,
  resetPasswordSchema,
  emailSchema,
};

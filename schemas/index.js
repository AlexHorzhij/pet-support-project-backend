const {
  signupUserSchema,
  loginUserSchema,
  updateUserSchema,
  verifyEmailSchema,
  resetPasswordSchema,
  emailSchema,
} = require('./user');

const { createPetSchema, updatePetSchema } = require('./pet');
const { noticeSchema } = require('./notice');

module.exports = {
  signupUserSchema,
  loginUserSchema,
  updateUserSchema,
  verifyEmailSchema,
  resetPasswordSchema,
  createPetSchema,
  updatePetSchema,
  noticeSchema,
  emailSchema,
};

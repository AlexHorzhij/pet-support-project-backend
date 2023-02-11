const {
  signupUserSchema,
  loginUserSchema,
  updateUserSchema,
  verifyEmailSchema,
  resetPasswordSchema,
  emailSchema
} = require('./user');

const { createPetSchema, updatePetSchema } = require('./pet');
const { createNoticeSchema, updateNoticeSchema } = require('./notice');

module.exports = {
  signupUserSchema,
  loginUserSchema,
  updateUserSchema,
  verifyEmailSchema,
  resetPasswordSchema,
  createPetSchema,
  updatePetSchema,
  createNoticeSchema,
  updateNoticeSchema,
  emailSchema
};

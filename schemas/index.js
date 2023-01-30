const {
  signupUserSchema,
  loginUserSchema,
  updateUserSchema,
  verifyEmailSchema,
} = require('./user');

const { createPetSchema, updatePetSchema } = require('./pet');
const { createNoticeSchema, updateNoticeSchema } = require('./notice');

module.exports = {
  signupUserSchema,
  loginUserSchema,
  updateUserSchema,
  verifyEmailSchema,
  createPetSchema,
  updatePetSchema,
  createNoticeSchema,
  updateNoticeSchema,
};

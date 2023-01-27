const {
  signupUserSchema,
  loginUserSchema,
  updateUserSchema,
  verifyEmailSchema,
} = require('./user');

const { createPetSchema, updatePetSchema } = require('./pet');

module.exports = {
  signupUserSchema,
  loginUserSchema,
  updateUserSchema,
  verifyEmailSchema,
  createPetSchema,
  updatePetSchema,
};

const Joi = require('joi');

const pet = {
  name: Joi.string().required().alphanum().min(2).max(16),
  date: Joi.string()
    .optional()
    .pattern(new RegExp('(0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[012]).(19|20)')),
  breed: Joi.string().optional().alphanum().min(2).max(16),
  avatarUrl: Joi.string().required(),
  comments: Joi.string().required().min(8).max(120),
};

const createPetSchema = Joi.object({
  name: pet.name,
  date: pet.date,
  breed: pet.breed,
  avatarUrl: pet.avatarUrl,
  comments: pet.comments,
}).required();

const updatePetSchema = Joi.object({
  name: pet.name.optional(),
  date: pet.date,
  breed: pet.breed,
  avatarUrl: pet.avatarUrl.optional(),
  comments: pet.comments.optional(),
}).required();

module.exports = {
  createPetSchema,
  updatePetSchema,
};

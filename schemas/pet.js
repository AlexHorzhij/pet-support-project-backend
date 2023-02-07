const Joi = require('joi');

const pet = {
  name: Joi.string().alphanum().min(2).max(16).optional(),
  date: Joi.string()
    .optional()
    .pattern(new RegExp('(0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[012]).(19|20)')),
  breed: Joi.string().optional().alphanum().min(2).max(16),
  avatarUrl: Joi.string().optional(),
  description: Joi.string().min(8).max(120).optional(),
};

const createPetSchema = Joi.object({
  name: pet.name,
  date: pet.date,
  breed: pet.breed,
  avatarUrl: pet.avatarUrl,
  description: pet.description,
}).required();

const updatePetSchema = Joi.object({
  name: pet.name,
  date: pet.date,
  breed: pet.breed,
  avatarUrl: pet.avatarUrl,
  description: pet.description,
}).required();

module.exports = {
  createPetSchema,
  updatePetSchema,
};

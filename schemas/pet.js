const Joi = require('joi');

const pet = {
  name: Joi.string().required().alphanum().min(2).max(16),
  date: Joi.string()
    .optional()
    .pattern(
      new RegExp(
        '^s*(3[01]|[12][0-9]|0?[1-9]).(1[012]|0?[1-9]).((?:19|20)d{2})s*$'
      )
    ),
  breed: Joi.string().optional().alphanum().min(2).max(16),
  comments: Joi.string().required().min(8).max(120),
};

const createPetSchema = Joi.object({
  name: pet.name,
  date: pet.date,
  breed: pet.breed,
  comments: pet.comments,
}).required();

const updatePetSchema = Joi.object({
  name: pet.name.optional(),
  date: pet.date,
  breed: pet.breed,
  comments: pet.comments.optional(),
}).required();

module.exports = {
  createPetSchema,
  updatePetSchema,
};

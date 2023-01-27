const Joi = require('joi');

const pet = {
  name: Joi.string().required(),
  date: Joi.date().optional(),
  breed: Joi.string().optional(),
  description: Joi.string().required(),
};

const createPetSchema = Joi.object({
  name: pet.name,
  date: pet.date,
  breed: pet.breed,
  description: pet.description,
}).required();

const updatePetSchema = Joi.object({
  name: pet.name.optional(),
  date: pet.date,
  breed: pet.breed,
  description: pet.description.optional(),
}).required();

module.exports = {
  createPetSchema,
  updatePetSchema,
};

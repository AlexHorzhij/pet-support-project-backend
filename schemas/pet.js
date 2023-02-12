const Joi = require('joi');
const { regexName, regexDate } = require('../consts');

const pet = {
  name: Joi.string().min(2).max(16).pattern(new RegExp(regexName)),
  date: Joi.string().pattern(new RegExp(regexDate)),
  breed: Joi.string().min(2).max(16),
  avatarUrl: Joi.string(),
  description: Joi.string().min(8).max(120),
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

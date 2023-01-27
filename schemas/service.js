const Joi = require('joi');

const service = {
  title: Joi.string().required(),
  url: Joi.date().optional(),
  addressURL: Joi.string().optional(),
  imageURL: Joi.string().optional(),
  address: Joi.string().optional(),
  workDays: Joi.array().optional(),
  phone: Joi.string().optional(),
  email: Joi.string().optional(),
};

const addServiceSchema = Joi.object({
  title: service.title,
  url: service.url,
  addressURL: service.addressURL,
  imageURL: service.imageURL,
  address: service.address,
  workDays: service.workDays,
  phone: service.phone,
  email: service.email,
}).required();

module.exports = {
  addServiceSchema,
};

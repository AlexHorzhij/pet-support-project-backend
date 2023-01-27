const Joi = require('joi');

const news = {
  title: Joi.string().required(),
  url: Joi.string().required(),
  description: Joi.string().required(),
  date: Joi.string().required(),
};

const addNewsSchema = Joi.object({
  title: news.title,
  url: news.url,
  description: news.description,
  date: news.date,
}).required();

module.exports = {
  addNewsSchema,
};

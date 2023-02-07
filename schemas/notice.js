const Joi = require('joi');

const notice = {
  category: Joi.string()
    .valid('lost/found', 'in good hands', 'sell')
    .optional(),
  title: Joi.string().min(2).max(48).optional(),
  name: Joi.string().alphanum().min(2).max(16).optional(),
  birthdate: Joi.string()
    .pattern(new RegExp('(0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[012]).(19|20)'))
    .optional(),
  breed: Joi.string().min(2).max(24).optional(),
  avatarUrl: Joi.string().optional(),
  sex: Joi.string().valid('male', 'female').optional(),
  location: Joi.string().min(8).max(20).optional(),
  price: Joi.number().min(1).optional(),
  comments: Joi.string().min(8).max(120).optional(),
};

const createNoticeSchema = Joi.object({
  category: notice.category,
  title: notice.title,
  name: notice.name,
  birthdate: notice.birthdate,
  breed: notice.breed,
  avatarUrl: notice.avatarUrl,
  sex: notice.sex,
  location: notice.location,
  price: notice.price,
  comments: notice.comments,
}).required();

const updateNoticeSchema = Joi.object({
  category: notice.category,
  title: notice.title,
  name: notice.name,
  birthdate: notice.birthdate,
  breed: notice.breed,
  avatarUrl: notice.avatarUrl,
  sex: notice.sex,
  location: notice.location,
  price: notice.price,
  comments: notice.comments,
}).required();

module.exports = {
  createNoticeSchema,
  updateNoticeSchema,
};

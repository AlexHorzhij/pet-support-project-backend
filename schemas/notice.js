const Joi = require('joi');

const notice = {
  status: Joi.string().valid('lost/found', 'in good hands', 'sell').required(),
  title: Joi.string().min(2).max(48).required(),
  name: Joi.string().alphanum().min(2).max(16).optional(),
  birthdate: Joi.string()
    .pattern(
      new RegExp(
        '(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.(19|20)'
      )
    )
    .optional(),
  breed: Joi.string().min(2).max(24).optional(),
  sex: Joi.string().valid('male', 'female').required(),
  location: Joi.string().min(8).max(20).optional(),
  price: Joi.number().min(1).required(),
  comments: Joi.string().min(8).max(120).optional(),
};

const createNoticeSchema = Joi.object({
  status: notice.status,
  title: notice.title,
  name: notice.name,
  birthdate: notice.birthdate,
  breed: notice.birthdate,
  sex: notice.sex,
  location: notice.location,
  price: notice.price,
  comments: notice.comments,
}).required();

const updateNoticeSchema = Joi.object({
  status: notice.status.optional(),
  title: notice.title.optional(),
  name: notice.name,
  birthdate: notice.birthdate,
  breed: notice.birthdate,
  sex: notice.sex.optional(),
  location: notice.location,
  price: notice.price.optional(),
  comments: notice.comments,
}).required();

module.exports = {
  createNoticeSchema,
  updateNoticeSchema,
};

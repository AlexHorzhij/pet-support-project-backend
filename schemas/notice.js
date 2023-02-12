const Joi = require('joi');

const notice = {
  category: Joi.string().valid('lost/found', 'in good hands', 'sell'),
  title: Joi.string().min(2).max(48),
  name: Joi.string()
    .min(2)
    .max(16)
    .pattern(new RegExp('^[a-zA-Z]*$')),
  birthdate: Joi.string().pattern(
    new RegExp(
      '^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$'
    )
  ),
  breed: Joi.string().min(2).max(24),
  avatarUrl: Joi.string(),
  sex: Joi.string().valid('male', 'female'),
  location: Joi.string(),
  price: Joi.number().min(1),
  comments: Joi.string().min(8).max(120),
};

const noticeSchema = Joi.object({
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
  noticeSchema,
};

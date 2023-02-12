const NOTICE_CATEGORY = {
  'lost-found': 'lost/found',
  'for-free': 'in good hands',
  sell: 'sell',
};

const NOTICE_CATEGORY_SCHEMA = Object.values(NOTICE_CATEGORY);

const { regexName, regexDate, regexPhone } = require('./regex');

module.exports = {
  NOTICE_CATEGORY,
  NOTICE_CATEGORY_SCHEMA,
  regexName,
  regexDate,
  regexPhone,
};

const { Notice } = require('../../models');
const { NOTICE_CATEGORY } = require('../../consts');

const getNotice = async (req, res) => {
  const { page = 1, limit = 20, category, search } = req.query;
  const skip = (page - 1) * limit;

  let filters = {};

  if (category && NOTICE_CATEGORY.includes(category.toLowerCase())) {
    filters = { ...filters, category: category.toLowerCase() };
  }

  if (search) {
    filters = { ...filters, title: new RegExp(`${search}`) };
  }

  const notices = await Notice.find(filters, '', {
    skip,
    limit: Number(limit),
  });

  res.json({
    status: 'success',
    code: 200,
    data: {
      result: notices,
    },
  });
};

module.exports = getNotice;

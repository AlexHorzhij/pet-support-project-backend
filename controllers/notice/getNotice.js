const { Notice } = require('../../models');
const { NOTICE_CATEGORY } = require('../../consts');

const getNotice = async (req, res) => {
  const { page = 1, limit = 100, category, search } = req.query;
  const skip = (page - 1) * limit;
  let filters = {};

  if (category && NOTICE_CATEGORY[category]) {
    filters = { ...filters, category: NOTICE_CATEGORY[category.toLowerCase()] };
  }

  if (search) {
    filters = { ...filters, title: new RegExp(`${search}`, 'i') };
  }

  const result = await Notice.find(filters, '', {
    skip,
    limit: Number(limit),
  }).populate({
    path: 'owner',
    select: '_id name phone',
  });

  res.status(200).json(result);
};

module.exports = getNotice;

const { Notice } = require('../../models');
const { NotFound } = require('http-errors');

const getUserNotice = async (req, res) => {
  const { page = 1, limit = 20, status, search } = req.query;
  const skip = (page - 1) * limit;
  const userId = req.user._id;

  let filters = {
    owner: userId,
  };

  if (status && NOTICE_STATUS.includes(status.toLowerCase())) {
    filters = { ...filters, status: status.toLowerCase() };
  }

  if (search) {
    filters = { ...filters, title: new RegExp(`${search}`) };
  }

  const result = await Notice.find(filters, '', {
    skip,
    limit: Number(limit),
  });

  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getUserNotice;

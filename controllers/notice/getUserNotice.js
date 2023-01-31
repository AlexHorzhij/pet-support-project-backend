const { Notice } = require('../../models');
const { NotFound } = require('http-errors');

const getUserNotice = async (req, res) => {
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const noticeId = req.params.id;
  const userId = req.user._id;
  const result = await Notice.find({ owner: userId, _id: noticeId }, '', {
    skip,
    limit: Number(limit),
  });

  if (!result) {
    throw new NotFound('Not found');
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getUserNotice;

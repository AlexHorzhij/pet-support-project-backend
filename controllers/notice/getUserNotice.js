const { Notice } = require('../../models');
const { NotFound } = require('http-errors');

const getUserNotice = async (req, res) => {
  const noticeId = req.params.id;
  const userId = req.user._id;
  const result = await Notice.find({ owner: userId, _id: noticeId });

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

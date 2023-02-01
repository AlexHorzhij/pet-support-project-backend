const { Notice } = require('../../models');
const { NotFound } = require('http-errors');

const deleteUserNotice = async (req, res) => {
  const noticeId = req.params.id;
  const userId = req.user._id;
  const result = await Notice.findOneAndRemove({
    owner: userId,
    _id: noticeId,
  });

  if (!result) {
    throw new NotFound('Notice not found');
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'notice deleted',
    data: {
      result,
    },
  });
};

module.exports = deleteUserNotice;

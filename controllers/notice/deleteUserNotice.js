const { Notice } = require('../../models');
const { NotFound } = require('http-errors');

const deleteUserNotice = async (req, res) => {
  const { noticeId } = req.params;
  const userId = req.user._id;
  const result = await Notice.findOneAndRemove({
    owner: userId,
    _id: noticeId,
  });

  if (!result) {
    throw new NotFound('Notice not found');
  }

  res.status(200).json({
    message: 'notice deleted',
    result,
  });
};

module.exports = deleteUserNotice;

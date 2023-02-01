const { FavotiteNotice } = require('../../models');

const deleteFavoriteNotice = async (req, res) => {
  const noticeId = req.params.id;
  const userId = req.user._id;
  const result = await FavotiteNotice.findOneAndRemove({
    user: userId,
    notice: noticeId,
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

module.exports = deleteFavoriteNotice;

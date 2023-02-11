const { FavotiteNotice } = require('../../models');

const deleteFavoriteNotice = async (req, res) => {
  const { noticeId } = req.params;
  const userId = req.user._id;
  const result = await FavotiteNotice.findOneAndRemove({
    user: userId,
    notice: noticeId,
  });

  if (!result) {
    throw new NotFound('Notice not found');
  }
  res.status(200).json({
    result,
    favorite: false,
  });
};

module.exports = deleteFavoriteNotice;

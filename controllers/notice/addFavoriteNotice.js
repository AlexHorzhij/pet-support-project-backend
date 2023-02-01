const { FavotiteNotice } = require('../../models');
const { Notice } = require('../../models');
const { NotFound, BadRequest } = require('http-errors');

const addFavoriteNotice = async (req, res) => {
  const noticeId = req.params.id;
  const userId = req.user._id;
  const notice = await Notice.findOne({ _id: noticeId });

  if (!notice) {
    throw new NotFound('Notice not found');
  }

  const maybeAlreadyFavorite = await FavotiteNotice.findOne({ notice: noticeId, user: userId });

  if (maybeAlreadyFavorite) {
    throw new BadRequest('Notice already liked')
  }

  const result = await FavotiteNotice.create({
    user: userId,
    notice: noticeId,
  });

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = addFavoriteNotice;

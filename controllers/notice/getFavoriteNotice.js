const { FavotiteNotice } = require('../../models');

const getFavoriteNotice = async (req, res) => {
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const notices = await FavotiteNotice.find({}, '', {
    skip,
    limit: Number(limit),
  }).populate('notice');
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: notices,
    },
  });
};

module.exports = getFavoriteNotice;

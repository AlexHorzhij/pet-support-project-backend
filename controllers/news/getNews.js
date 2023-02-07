const { News } = require('../../models');

const getNews = async (req, res) => {
  const { page = 1, limit = 20, search } = req.query;
  const skip = (page - 1) * limit;

  let filters = {};

  if (search) {
    filters = { ...filters, title: new RegExp(`${search}`, 'i') };
  }

  const news = await News.find(filters, '', {
    skip,
    limit: Number(limit),
  });
  res.json({
    news,
  });
};

module.exports = getNews;

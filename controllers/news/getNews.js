const { News } = require('../../models');

const getNews = async (req, res) => {
  const { page = 1, limit = 20, search } = req.query;
  const skip = (page - 1) * limit;

  let filters = {};

  if (search) {
    filters = { ...filters, title: new RegExp(`${search}`) };
  }

  const news = await News.find(filters, '', {
    skip,
    limit: Number(limit),
  });
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: news,
    },
  });
};

module.exports = getNews;

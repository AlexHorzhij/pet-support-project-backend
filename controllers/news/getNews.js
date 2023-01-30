const { News } = require('../../models');
const getNews = async (req, res) => {
  const news = await News.find({});
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: news,
    },
  });
};

module.exports = getNews;

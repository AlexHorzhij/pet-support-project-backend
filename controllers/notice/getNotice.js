const { Notice } = require('../../models');

const getNotice = async (req, res) => {
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const notices = await Notice.find({}, '', {
    skip,
    limit: Number(limit),
  });

  res.json({
    status: 'success',
    code: 200,
    data: {
      result: notices,
    },
  });
};

module.exports = getNotice;

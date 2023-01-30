const { Notice } = require('../../models');

const getNotice = async (req, res) => {
  const notices = await Notice.find({});
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: notices,
    },
  });
};

module.exports = getNotice;

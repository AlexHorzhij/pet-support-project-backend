const { Notice } = require('../../models');
const { NotFound } = require('http-errors');

const updateUserNotice = async (req, res) => {
  const noticetId = req.params.id;
  const userId = req.user._id;
  const result = await Notice.findOneAndUpdate(
    { noticetId, userId },
    req.body,
    {
      new: true,
    }
  );

  if (!result) {
    throw new NotFound('Not found');
  }

  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateUserNotice;

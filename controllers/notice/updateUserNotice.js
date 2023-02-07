const { Notice } = require('../../models');
const { NotFound } = require('http-errors');

const updateUserNotice = async (req, res) => {
  const { noticetId } = req.params;
  const userId = req.user._id;
  const result = await Notice.findOneAndUpdate(
    { noticetId, userId },
    req.body,
    {
      new: true,
    }
  );

  if (!result) {
    throw new NotFound('Notice not found');
  }

  res.status(200).json(result);
};

module.exports = updateUserNotice;

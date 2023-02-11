const { Notice } = require('../../models');
const { NotFound } = require('http-errors');

const updateUserNotice = async (req, res) => {
  const { noticeId } = req.params;
  const userId = req.user._id;
  const result = await Notice.findOneAndUpdate(
    { _id: noticeId, owner: userId },
    req.body,
    {
      new: true,
    }
  );
  console.log(result);
  if (!result) {
    throw new NotFound('Notice not found');
  }

  res.status(200).json(result);
};

module.exports = updateUserNotice;

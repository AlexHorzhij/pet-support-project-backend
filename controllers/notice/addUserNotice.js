const { Notice } = require('../../models');

const addUserNotice = async (req, res) => {
  const userId = req.user._id;
  const result = await Notice.create({ ...req.body, owner: userId });
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = addUserNotice;

const { Notice } = require('../../models');

const addUserNotice = async (req, res) => {
  const userId = req.user._id;
  const date = Date.now();
  const result = await Notice.create({
    ...req.body,
    create_at: date,
    owner: userId,
  });
  res.status(201).json(result);
};

module.exports = addUserNotice;

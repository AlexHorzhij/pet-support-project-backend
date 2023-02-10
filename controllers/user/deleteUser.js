const { User } = require('../../models');
const { NotFound } = require('http-errors');

const deleteUser = async (req, res) => {
  const { _id } = req.user;
  const result = await User.findByIdAndRemove(_id);

  if (!result) {
    throw new NotFound('Not found');
  }

  res.json({
    message: 'User deleted',
  });
};

module.exports = deleteUser;
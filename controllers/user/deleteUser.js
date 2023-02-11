const { User, Pet, Notice, FavotiteNotice } = require('../../models');
const { NotFound } = require('http-errors');

const deleteUser = async (req, res) => {
  const userId = req.user._id;
  await Pet.findOneAndDelete({ owner: userId });
  await Notice.findOneAndDelete({ owner: userId });
  await FavotiteNotice.findOneAndDelete({ user: userId });
  const result = await User.findByIdAndRemove(userId);

  if (!result) {
    throw new NotFound('User not found');
  }

  res.status(200).json({
    message: 'User deleted',
    result,
  });
};

module.exports = deleteUser;

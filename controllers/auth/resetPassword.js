const { User } = require('../../models');
const bcrypt = require('bcrypt');
const { NotFound } = require('http-errors');
const { nanoid } = require('nanoid');

const resetPassword = async (req, res) => {
  const { resetToken } = req.params;
  const userPassword = req.body.password;
  const hashPassword = await bcrypt.hash(userPassword, 10);
  const user = await User.findOne({ resetToken });
  if (!user) {
    throw NotFound('User not found');
  }

  await User.findByIdAndUpdate(user._id, {
    password: hashPassword,
  });

  res.json({
    message: 'Reset password successful',
  });
};

module.exports = resetPassword;

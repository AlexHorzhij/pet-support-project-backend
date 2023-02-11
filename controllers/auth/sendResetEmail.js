const { User } = require('../../models');
const { sendEmail, resetEmail } = require('../../helpers');
const { NotFound } = require('http-errors');

const sendResetEmail = async (req, res) => {
  const { email } = req.body;
  console.log(email);
  const user = await User.findOne({ email });
  if (!user) {
    throw NotFound('User is not found');
  }
  const userToken = user.resetToken;

  const mail = resetEmail(email, userToken);
  await sendEmail(mail);

  res.json({
    message: 'Reset email sent',
  });
};
module.exports = sendResetEmail;

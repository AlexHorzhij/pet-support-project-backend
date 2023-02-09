const { User } = require('../../models');
const { sendEmail, verifyEmail } = require('../../helpers');
const { BadRequest } = require('http-errors');

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user || user.verify) {
    throw BadRequest('Verification has already been passed');
  }

  const userToken = user.verificationToken;

  const mail = verifyEmail(email, userToken);
  await sendEmail(mail);

  res.json({
    message: 'Verification email sent',
  });
};

module.exports = resendVerifyEmail;

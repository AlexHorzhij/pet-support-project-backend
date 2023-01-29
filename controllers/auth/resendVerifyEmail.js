const { User } = require('../../models');
const { sendEmail } = require('../../helpers');
const { BadRequest } = require('http-errors');
const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user || user.verify) {
    throw BadRequest('Verification has already been passed');
  }

  const verifyEmail = {
    to: email,
    subject: 'Verify your email',
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationToken}">Click to verify email</a>`,
  };
  await sendEmail(verifyEmail);

  res.json({
    message: 'Verification email sent',
  });
};

module.exports = resendVerifyEmail;

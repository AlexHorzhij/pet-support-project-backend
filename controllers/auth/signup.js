const { Conflict } = require('http-errors');
const { User } = require('../../models');
const bcrypt = require('bcrypt');
const { nanoid } = require('nanoid');
const { sendEmail } = require('../../helpers');
const {BASE_URL}= process.env

const signup = async (req, res) => {
  const { email, password,} = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict(`"Email ${email} in use"`);
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const verificationToken = nanoid();

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    verificationToken,
  });

  const verifyEmail = {
     to: email,
     subject: "Verify your email",
     html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">Click to verify email</a>`
   }
   await sendEmail(verifyEmail);

  res.status(201).json({
    name: newUser.name,
    email: newUser.email,
    password: newUser.password,
    phone: newUser.phone,
    city: newUser.city,
  });
};

module.exports = signup;

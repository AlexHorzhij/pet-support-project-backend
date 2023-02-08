const { Conflict } = require('http-errors');
const { User } = require('../../models');
const bcrypt = require('bcrypt');
const { nanoid } = require('nanoid');
const { sendEmail, uploadToCloudinary, formatParcer, verifyEmail } = require('../../helpers');

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict(`"Email ${email} in use"`);
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const verificationToken = nanoid();
  const { file } = req;
  if (!file) {
    avatarUrl =
      'http://res.cloudinary.com/djkbwd06u/image/upload/v1675694970/jshyicvhcfjtr9sb2fon.jpg';
  } else {
    const fileFormat = file.mimetype.split('/')[1];
    const { base64 } = formatParcer(fileFormat, file.buffer);

    const imageDetails = await uploadToCloudinary(base64, fileFormat);

    avatarUrl = imageDetails.url;
  }
  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarUrl,
    verificationToken,
  });

  const mail = verifyEmail(email, verificationToken);
  await sendEmail(mail);

  res.status(201).json({
    name: newUser.name,
    email: newUser.email,
    password: newUser.password,
    phone: newUser.phone,
    city: newUser.city,
    avatarUrl: newUser.avatarUrl,
  });
};

module.exports = signup;

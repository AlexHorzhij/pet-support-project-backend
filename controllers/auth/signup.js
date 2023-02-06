const { Conflict } = require('http-errors');
const { User } = require('../../models');
const bcrypt = require('bcrypt');
const { nanoid } = require('nanoid');
const { sendEmail } = require('../../helpers');
const { BASE_URL } = process.env;
const { uploadToCloudinary } = require('../../helpers');
const { formatParcer } = require('../../helpers');

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

  const verifyEmail = {
    to: email,
    subject: 'Verify your email',
    html: `<div style="font-style: medium; line-height: 1; letter-spacing: 0.04em; text-align: center; background-color: rgb(253, 247, 242); padding: 20px;">
    <p style=" font-size: 48px; color: black; margin-bottom: 20px;">You have successfully registered in the <span style="line-height: 48px; font-weight: 700; ont-size: 50px;">pe<span style="color: orange">t</span>ly</span>.</p>
    <p style=" font-size: 36px; color:orange; margin-bottom: 20px;">Follow the link for further use</p>
    <button style="cursor: pointer; text-align: center; vertical-align: middle;line-height: 1.37;border-radius: 40px; margin-bottom: 20px; min-width: 64px;
    padding: 5px 15px; border: 2px solid rgb(245, 146, 86);background-color: white;"><a style="text-decoration: none; font-size:36px; color:orange; line-height: 1.37;" target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">verification</a></button>
    <p style="font-size: 36px; color: black;">If you did not register and you received the email by mistake, ignore it.</p></div>`,
  };
  await sendEmail(verifyEmail);

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

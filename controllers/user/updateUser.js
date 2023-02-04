const { User } = require('../../models');
const { NotFound } = require('http-errors');
const bcrypt = require('bcrypt');
const { uploadToCloudinary } = require('../../helpers');
const { formatParcer } = require('../../helpers');

const updateUser = async (req, res) => {
  const { _id } = req.user;

  const userPassword = req.body.password;
  if (userPassword) {
    req.body.password = bcrypt.hashSync(userPassword, bcrypt.genSaltSync(10));
  }

  const { file } = req;
  if (file) {
    const fileFormat = file.mimetype.split('/')[1];
    const { base64 } = formatParcer(fileFormat, file.buffer);

    const imageDetails = await uploadToCloudinary(base64, fileFormat);

    avatarUrl = imageDetails.url;
  }

  const result = await User.findByIdAndUpdate(
    _id,
    { ...req.body, avatarUrl },
    { new: true }
  );

  if (!result) {
    throw new NotFound('Not found');
  }
  res.status(201).json({
    _id,
    name: result.name,
    email: result.email,
    avatarUrl: result.avatarUrl,
    birthdate: result.birthdate,
    phone: result.phone,
    city: result.city,
  });
};

module.exports = updateUser;

const { Notice } = require('../../models');
const { uploadToCloudinary } = require('../../helpers');
const { formatParcer } = require('../../helpers');

const addUserNotice = async (req, res) => {
  const userId = req.user._id;
  const date = Date.now();
  const { file } = req;
  if (!file) {
    avatarUrl =
      'http://res.cloudinary.com/djkbwd06u/image/upload/v1675352872/foewy92xelkruou5221u.jpg';
  } else {
    const fileFormat = file.mimetype.split('/')[1];
    const { base64 } = formatParcer(fileFormat, file.buffer);

    const imageDetails = await uploadToCloudinary(base64, fileFormat);

    avatarUrl = imageDetails.url;
  }
  const result = await Notice.create({
    ...req.body,
    avatarUrl,
    create_at: date,
    owner: userId,
  });
  res.status(201).json(result);
};

module.exports = addUserNotice;

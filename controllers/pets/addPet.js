const { Pet } = require('../../models');
const { uploadToCloudinary } = require('../../helpers');
const { formatParcer } = require('../../helpers');

const addPet = async (req, res) => {
  const { _id: owner } = req.user;
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

  const result = await Pet.create({ ...req.body, owner, avatarUrl });

  res.status(201).json(result);
};

module.exports = addPet;

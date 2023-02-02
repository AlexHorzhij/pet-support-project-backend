const { Pet } = require('../../models');
const { NotFound } = require('http-errors');
const { uploadToCloudinary } = require('../../helpers');
const { formatParcer } = require('../../helpers');

const updatePet = async (req, res) => {
  const petId = req.params.id;
  const { file } = req;
  const fileFormat = file.mimetype.split('/')[1];
  const { base64 } = formatParcer(fileFormat, file.buffer);
  const imageDetails = await uploadToCloudinary(base64, fileFormat);

  avatarUrl = imageDetails.url;
  const result = await Pet.findByIdAndUpdate(
    petId,
    { ...req.body, avatarUrl },
    { new: true }
  );

  if (!result) {
    throw new NotFound('Not found');
  }
  res.json(result);
};

module.exports = updatePet;

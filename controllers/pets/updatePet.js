const { Pet } = require('../../models');
const { NotFound } = require('http-errors');
const { uploadToCloudinary } = require('../../helpers');
const { formatParcer } = require('../../helpers');

const updatePet = async (req, res) => {
  const { id } = req.params;
  const { file } = req;
  if (file) {
    const fileFormat = file.mimetype.split('/')[1];
    const { base64 } = formatParcer(fileFormat, file.buffer);

    const imageDetails = await uploadToCloudinary(base64, fileFormat);

    avatarUrl = imageDetails.url;
    const result = await Pet.findByIdAndUpdate(
      id,
       {avatarUrl},
      { new: true }
    );
  }

  const result = await Pet.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) {
    throw new NotFound('Not found');
  }
  res.json(result);
};

module.exports = updatePet;

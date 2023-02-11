const { Notice } = require('../../models');
const { NotFound } = require('http-errors');
const { uploadToCloudinary } = require('../../helpers');
const { formatParcer } = require('../../helpers');

const updateUserNotice = async (req, res) => {
  const { noticeId } = req.params;
  const { file } = req;

  if (file) {
    const fileFormat = file.mimetype.split('/')[1];
    const { base64 } = formatParcer(fileFormat, file.buffer);

    const imageDetails = await uploadToCloudinary(base64, fileFormat);

    avatarUrl = imageDetails.url;
    await Notice.findByIdAndUpdate(noticeId, { avatarUrl }, { new: true });
  }

  const result = await Notice.findByIdAndUpdate(noticeId, req.body, {
    new: true,
  });

  if (!result) {
    throw new NotFound('Notice not found');
  }

  res.status(200).json(result);
};

module.exports = updateUserNotice;

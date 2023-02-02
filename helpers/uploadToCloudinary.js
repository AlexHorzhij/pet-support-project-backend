const { InternalServerError } = require('http-errors');
const cloudinary = require('cloudinary');

const uploadToCloudinary = async (fileString, format) => {
  try {
    const { uploader } = cloudinary;

    const res = await uploader.upload(
      `data:avatarUrl/${format};base64,${fileString}`
    );

    return res;
  } catch (error) {
    throw new InternalServerError(error);
  }
};

module.exports = uploadToCloudinary;

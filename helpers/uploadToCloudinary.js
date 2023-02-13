const { InternalServerError } = require('http-errors');
const cloudinary = require('cloudinary');

const uploadToCloudinary = async (fileString, format) => {
  try {
    const { uploader } = cloudinary;

    const res = await uploader.upload(
      `data:avatarUrl/${format};base64,${fileString}`,
      {
        transformation: [
          { quality: 'auto', crop: 'scale' },
          { fetch_format: 'auto' },
        ],
      }
    );

    return res;
  } catch (error) {
    throw new InternalServerError(error);
  }
};

module.exports = uploadToCloudinary;

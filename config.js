const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  DB_HOST: process.env.DB_HOST,
  PORT: process.env.PORT,
  SECRET_KEY: process.env.SECRET_KEY,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  SENDGRID_EMAIL:process.env.SENDGRID_EMAIL,
  BASE_URL: process.env.BASE_URL,
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
};

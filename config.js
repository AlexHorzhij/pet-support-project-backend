const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  DB_HOST: process.env.DB_HOST,
  PORT:process.env.PORT,
  SECRET_KEY: process.env.SECRET_KEY,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  BASE_URL:process.env.BASE_URL
};
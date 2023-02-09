const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const { SENDGRID_API_KEY, SENDGRID_EMAIL } = require('../config.js');

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async data => {
  const email = { ...data, from: SENDGRID_EMAIL };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
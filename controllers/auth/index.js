const signup = require('./signup');
const login = require('./login');
const logout = require('./logout');
const verify = require('./verify');
const resendVerifyEmail = require('./resendVerifyEmail');
const resetPassword = require('./resetPassword');
const sendResetEmail = require('./sendResetEmail');

module.exports = {
  signup,
  login,
  logout,
  verify,
  resendVerifyEmail,
  resetPassword,
  sendResetEmail,
};

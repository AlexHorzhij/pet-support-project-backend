const signup = require('./signup');
const login = require('./login');
const logout = require('./logout');
const verify = require('./verify');
const resendVerifyEmail = require('./resendVerifyEmail');

module.exports = {
  signup,
  login,
  logout,
  verify,
  resendVerifyEmail,
};

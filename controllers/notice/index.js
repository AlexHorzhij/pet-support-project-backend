const addUserNotice = require('./addUserNotice');
const getUserNotice = require('./getUserNotice');
const updateUserNotice = require('./updateUserNotice');
const deleteUserNotice = require('./deleteUserNotice');
const getNotice = require('./getNotice');
const getNoticeByParams = require('./getNoticeByParams');

module.exports = {
  getUserNotice,
  addUserNotice,
  updateUserNotice,
  deleteUserNotice,
  getNotice,
  getNoticeByParams,
};

const addUserNotice = require('./addUserNotice');
const getUserNotice = require('./getUserNotice');
const updateUserNotice = require('./updateUserNotice');
const deleteUserNotice = require('./deleteUserNotice');
const getNotice = require('./getNotice');
const getFavoriteNotice = require('./getFavoriteNotice');
const addFavoriteNotice = require('./addFavoriteNotice');
const deleteFavoriteNotice = require('./deleteFavoriteNotice');

module.exports = {
  getUserNotice,
  addUserNotice,
  updateUserNotice,
  deleteUserNotice,
  getNotice,
  getFavoriteNotice,
  deleteFavoriteNotice,
  addFavoriteNotice,
};

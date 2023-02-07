const addUserNotice = require('./addUserNotice');
const getUserNotice = require('./getUserNotice');
const updateUserNotice = require('./updateUserNotice');
const deleteUserNotice = require('./deleteUserNotice');
const getNotice = require('./getNotice');
const addFavoriteNotice = require('./addFavoriteNotice');
const deleteFavoriteNotice = require('./deleteFavoriteNotice');

module.exports = {
  getUserNotice,
  addUserNotice,
  updateUserNotice,
  deleteUserNotice,
  getNotice,
  deleteFavoriteNotice,
  addFavoriteNotice,
};

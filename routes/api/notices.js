const express = require('express');
const router = express.Router();

const { ctrlWrapper } = require('../../helpers');
const { authentificate } = require('../../middlewares');

const {
  notice: { getNotice, getUserNotice, getFavoriteNotice },
} = require('../../controllers');

router.get('/', ctrlWrapper(getNotice));
router.get('/user', authentificate, ctrlWrapper(getUserNotice));
router.get('/user/favorite', authentificate, ctrlWrapper(getFavoriteNotice));

module.exports = router;

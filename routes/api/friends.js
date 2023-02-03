const express = require('express');
const router = express.Router();

const { ctrlWrapper } = require('../../helpers');

const {
  friends: { getFriends },
} = require('../../controllers');

router.get('/', ctrlWrapper(getFriends));

module.exports = router;

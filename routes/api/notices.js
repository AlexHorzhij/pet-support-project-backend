const express = require('express');
const router = express.Router();

const { ctrlWrapper } = require('../../helpers');

const {
  notice: { getNotice },
} = require('../../controllers');

router.get('/:category', ctrlWrapper(getNotice));

module.exports = router;

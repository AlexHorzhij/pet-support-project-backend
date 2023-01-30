const express = require('express');
const router = express.Router();

const { ctrlWrapper } = require('../../helpers');

const {
  news: { getNews },
} = require('../../controllers');

router.get('/', ctrlWrapper(getNews));

module.exports = router;

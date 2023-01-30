const express = require('express');
const router = express.Router();

const { ctrlWrapper } = require('../../helpers');

const {
  notice: { getNotice, getNoticeById },
} = require('../../controllers');

router.get('/', ctrlWrapper(getNotice));
router.get('/:id', ctrlWrapper(getNoticeById));

module.exports = router;

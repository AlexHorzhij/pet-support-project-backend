const express = require('express');
const router = express.Router();

const { ctrlWrapper } = require('../../helpers');

const {
  services: { getServices },
} = require('../../controllers');

router.get('/', ctrlWrapper(getServices));

module.exports = router;

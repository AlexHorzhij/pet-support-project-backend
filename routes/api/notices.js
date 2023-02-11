const express = require('express');
const router = express.Router();

const { ctrlWrapper } = require('../../helpers');
const { validateBody, authentificate, upload } = require('../../middlewares');

const {
  notice: {
    getNotice,
    getUserNotice,
    addUserNotice,
    addFavoriteNotice,
    updateUserNotice,
    deleteUserNotice,
    deleteFavoriteNotice,
  },
} = require('../../controllers');

const { noticeSchema } = require('../../schemas');

router.get('/', ctrlWrapper(getNotice));
router.get('/user', authentificate, ctrlWrapper(getUserNotice));

router.post(
  '/user',
  authentificate,
  upload.single('avatarUrl'),
  validateBody(noticeSchema),
  ctrlWrapper(addUserNotice)
);

router.post(
  '/user/:noticeId/favorite',
  authentificate,
  ctrlWrapper(addFavoriteNotice)
);

router.patch(
  '/user/:noticeId',
  authentificate,
  upload.single('avatarUrl'),
  validateBody(noticeSchema),
  ctrlWrapper(updateUserNotice)
);

router.delete('/user/:noticeId', authentificate, ctrlWrapper(deleteUserNotice));
router.delete(
  '/user/:noticeId/favorite',
  authentificate,
  ctrlWrapper(deleteFavoriteNotice)
);

module.exports = router;

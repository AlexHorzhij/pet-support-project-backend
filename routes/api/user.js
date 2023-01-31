const express = require('express');

const { ctrlWrapper } = require('../../helpers');

const { validateBody, authentificate } = require('../../middlewares');

const {
  user: { getUserPage, addPet, deletePet, updatePet },
  notice: {
    getUserNotice,
    addUserNotice,
    deleteUserNotice,
    updateUserNotice,
    getFavoriteNotice,
    deleteFavoriteNotice,
    addFavoriteNotice,
  },
} = require('../../controllers');

const {
  createPetSchema,
  updatePetSchema,
  createNoticeSchema,
  updateNoticeSchema,
} = require('../../schemas');

const router = express.Router();

router.get('/', authentificate, ctrlWrapper(getUserPage));
router.get('/notice', authentificate, ctrlWrapper(getUserNotice));
router.get('/favoritenotice', authentificate, ctrlWrapper(getFavoriteNotice));

router.post(
  '/',
  authentificate,
  validateBody(createPetSchema),
  ctrlWrapper(addPet)
);

router.post(
  '/notice',
  authentificate,
  validateBody(createNoticeSchema),
  ctrlWrapper(addUserNotice)
);

router.post(
  '/notice/:id/favorite',
  authentificate,
  ctrlWrapper(addFavoriteNotice)
);

router.delete('/:id', authentificate, ctrlWrapper(deletePet));
router.delete('/notice/:id', authentificate, ctrlWrapper(deleteUserNotice));
router.delete(
  '/notice/:id/favorite',
  authentificate,
  ctrlWrapper(deleteUserNotice)
);

router.put(
  '/:id',
  authentificate,
  validateBody(updatePetSchema),
  ctrlWrapper(updatePet)
);

router.patch(
  '/notice/:id',
  authentificate,
  validateBody(updateNoticeSchema),
  ctrlWrapper(updateUserNotice)
);

module.exports = router;

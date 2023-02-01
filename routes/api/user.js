const express = require('express');

const { ctrlWrapper } = require('../../helpers');

const { validateBody, authentificate } = require('../../middlewares');

const {
  user: { getUserPage, updateUser },
  pets: { addPet, deletePet, updatePet },
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
  updateUserSchema,
  createPetSchema,
  updatePetSchema,
  createNoticeSchema,
  updateNoticeSchema,
} = require('../../schemas');

const router = express.Router();

router.get('/', authentificate, ctrlWrapper(getUserPage));
router.get('/notice', authentificate, ctrlWrapper(getUserNotice));
router.get('/notice/favorite', authentificate, ctrlWrapper(getFavoriteNotice));

router.post(
  '/pets',
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

router.patch(
  '/',
  authentificate,
  validateBody(updateUserSchema),
  ctrlWrapper(updateUser)
);

router.patch(
  '/pets/:id',
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

router.delete('/pets/:id', authentificate, ctrlWrapper(deletePet));
router.delete('/notice/:id', authentificate, ctrlWrapper(deleteUserNotice));
router.delete(
  '/notice/:id/favorite',
  authentificate,
  ctrlWrapper(deleteFavoriteNotice)
);

module.exports = router;

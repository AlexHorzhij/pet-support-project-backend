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
router.get('/notices', authentificate, ctrlWrapper(getUserNotice));
router.get('/notices/favorite', authentificate, ctrlWrapper(getFavoriteNotice));

router.post(
  '/pets',
  authentificate,
  validateBody(createPetSchema),
  ctrlWrapper(addPet)
);

router.post(
  '/notices',
  authentificate,
  validateBody(createNoticeSchema),
  ctrlWrapper(addUserNotice)
);
router.post(
  '/notices/:id/favorite',
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
  '/notices/:id',
  authentificate,
  validateBody(updateNoticeSchema),
  ctrlWrapper(updateUserNotice)
);

router.delete('/pets/:id', authentificate, ctrlWrapper(deletePet));
router.delete('/notices/:id', authentificate, ctrlWrapper(deleteUserNotice));
router.delete(
  '/notices/:id/favorite',
  authentificate,
  ctrlWrapper(deleteFavoriteNotice)
);

module.exports = router;

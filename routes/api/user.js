const express = require('express');

const { ctrlWrapper } = require('../../helpers');

const { validateBody, authentificate, upload } = require('../../middlewares');

const {
  user: { getUserPage, updateUser },
  pets: { addPet, deletePet, updatePet },
  notice: {
    addUserNotice,
    deleteUserNotice,
    updateUserNotice,
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

router.post(
  '/pets',
  authentificate,
  validateBody(createPetSchema),
  upload.single('avatarUrl'),
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
  upload.single('avatarUrl'),
  ctrlWrapper(updateUser)
);

router.patch(
  '/pets/:id',
  authentificate,
  validateBody(updatePetSchema),
  upload.single('avatarUrl'),
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

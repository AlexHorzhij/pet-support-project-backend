const express = require('express');

const { ctrlWrapper } = require('../../helpers');

const { validateBody, authentificate, upload } = require('../../middlewares');

const {
  user: { getUserPage, updateUser, deleteUser },
  pets: { addPet, deletePet, updatePet },
} = require('../../controllers');

const {
  updateUserSchema,
  createPetSchema,
  updatePetSchema,
} = require('../../schemas');

const router = express.Router();

router.get('/', authentificate, ctrlWrapper(getUserPage));

router.post(
  '/pets',
  authentificate,
  upload.single('avatarUrl'),
  validateBody(createPetSchema),
  ctrlWrapper(addPet)
);

router.patch(
  '/',
  authentificate,
  upload.single('avatarUrl'),
  validateBody(updateUserSchema),
  ctrlWrapper(updateUser)
);

router.patch(
  '/pets/:id',
  authentificate,
  upload.single('avatarUrl'),
  validateBody(updatePetSchema),
  ctrlWrapper(updatePet)
);

router.delete('/', authentificate, ctrlWrapper(deleteUser));

router.delete('/pets/:id', authentificate, ctrlWrapper(deletePet));

module.exports = router;

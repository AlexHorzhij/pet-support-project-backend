const express = require('express');

const { ctrlWrapper } = require('../../helpers');

const { validateBody, authentificate, upload } = require('../../middlewares');

const {
  user: { getUserPage, updateUser },
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
  validateBody(createPetSchema),
  upload.single('avatarUrl'),
  ctrlWrapper(addPet)
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

router.delete('/pets/:id', authentificate, ctrlWrapper(deletePet));

module.exports = router;

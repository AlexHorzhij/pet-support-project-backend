const express = require('express');

const { ctrlWrapper } = require('../../helpers');

const { validateBody, authentificate } = require('../../middlewares');

const {
  user: { getUserPage, addPet, deletePet, updatePet },
} = require('../../controllers');

const { createPetSchema, updatePetSchema } = require('../../schemas');

const router = express.Router();

router.get('/', authentificate, ctrlWrapper(getUserPage));

router.post(
  '/',
  authentificate,
  validateBody(createPetSchema),
  ctrlWrapper(addPet)
);

router.delete('/:petId', authentificate, ctrlWrapper(deletePet));

router.put('/:petId', authentificate, validateBody(updatePetSchema), ctrlWrapper(updatePet));

module.exports = router;

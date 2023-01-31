const express = require('express');

const { ctrlWrapper } = require('../../helpers');

const { validateBody, authentificate } = require('../../middlewares');

const {
  user: { getUserPage, addPet, deletePet, updatePet },
  notice: { getUserNotice, addUserNotice, deleteUserNotice, updateUserNotice },
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

router.delete('/:id', authentificate, ctrlWrapper(deletePet));
router.delete('/notice/:id', authentificate, ctrlWrapper(deleteUserNotice));

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

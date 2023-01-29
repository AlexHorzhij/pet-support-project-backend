const express = require('express');

const { ctrlWrapper } = require('../../helpers');

const { validateBody, authentificate } = require('../../middlewares');

const { users: ctrl } = require('../../controllers');

const {
  signupUserSchema,
  loginUserSchema,
  updateUserSchema,
  verifyEmailSchema,
} = require('../../schemas');

const router = express.Router();

router.post(
  '/signup',
  validateBody(signupUserSchema),
  ctrlWrapper(ctrl.signup)
);

router.get('/verify/:verificationToken', ctrlWrapper(ctrl.verify));
router.post(
  '/verify',
  validateBody(verifyEmailSchema),
  ctrlWrapper(ctrl.resendVerifyEmail)
);

router.post('/login', validateBody(loginUserSchema), ctrlWrapper(ctrl.login));

router.put(
  '/update',
  authentificate,
  validateBody(updateUserSchema),
  ctrlWrapper(ctrl.updateUser)
);

router.post('/logout', authentificate, ctrlWrapper(ctrl.logout));

module.exports = router;

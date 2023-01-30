const express = require('express');

const { ctrlWrapper } = require('../../helpers');

const { validateBody, authentificate } = require('../../middlewares');

const { users: {signup, verify, resendVerifyEmail, login, updateUser, logout}} = require('../../controllers');

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
  ctrlWrapper(signup)
);

router.get('/verify/:verificationToken', ctrlWrapper(verify));
router.post(
  '/verify',
  validateBody(verifyEmailSchema),
  ctrlWrapper(resendVerifyEmail)
);

router.post('/login', validateBody(loginUserSchema), ctrlWrapper(login));

router.put(
  '/update',
  authentificate,
  validateBody(updateUserSchema),
  ctrlWrapper(updateUser)
);

router.post('/logout', authentificate, ctrlWrapper(logout));

module.exports = router;

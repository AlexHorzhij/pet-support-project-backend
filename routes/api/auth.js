const express = require('express');

const { ctrlWrapper } = require('../../helpers');

const { validateBody, authentificate, upload } = require('../../middlewares');

const {
  auth: { signup, verify, resendVerifyEmail, login, logout },
} = require('../../controllers');

const {
  signupUserSchema,
  loginUserSchema,
  verifyEmailSchema,
} = require('../../schemas');

const router = express.Router();

router.post(
  '/signup',
  validateBody(signupUserSchema),
  upload.single('avatarUrl'),
  ctrlWrapper(signup)
);

router.get('/verify/:verificationToken', ctrlWrapper(verify));
router.post(
  '/verify',
  validateBody(verifyEmailSchema),
  ctrlWrapper(resendVerifyEmail)
);

router.post('/login', validateBody(loginUserSchema), ctrlWrapper(login));
router.post('/logout', authentificate, ctrlWrapper(logout));

module.exports = router;

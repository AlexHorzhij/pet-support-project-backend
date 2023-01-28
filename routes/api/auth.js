const express = require("express");

const { ctrlWrapper } = require("../../helpers");

const { validateBody } = require("../../middlewares");

const { users: ctrl } = require("../../controllers");

const { signupUserSchema, loginUserSchema, updateUserSchema, verifyEmailSchema } = require("../../schemas");

const router = express.Router();
// signup
router.post("/signup", validateBody(signupUserSchema), ctrlWrapper(ctrl.signup));

// verify
// router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verify));
// router.post("/verify", validation(joiVerifySchema), ctrlWrapper(ctrl.resendVerifyEmail))

// login
// router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));

// current
// router.get("/current", authentificate, ctrlWrapper(ctrl.getCurrent) )

// logout
// router.post("/logout", authentificate, ctrlWrapper(ctrl.logout))

// avatar
// router.patch("/avatars", authentificate, upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar))

module.exports = router;
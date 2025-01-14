const express = require("express");
const router = express.Router();
const {
  login,
  register,
  refreshToken,
  verifyRegisterOtp,
} = require("../controllers/auth.controller");

// Index.js will direct the request here, and it will be redirected to the appropriate controller.
router.post("/login", login);
router.post("/register", register);
router.post("/refresh-token", refreshToken);
router.post("/verify-otp", verifyRegisterOtp);

module.exports = router;

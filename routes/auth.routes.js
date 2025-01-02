const express = require('express');
const router = express.Router();
const { login, register, refreshToken, verifyRegisterOtp } = require('../controllers/auth.controller');

router.post('/login', login); // api/auth/login
router.post('/register', register);
router.post('/refresh-token', refreshToken);
router.post('/verify-otp', verifyRegisterOtp);

module.exports = router;
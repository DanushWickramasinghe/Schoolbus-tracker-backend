const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../configs/config').jwt;
const { sendEmailOtp } = require('../utils/otp.service');
const {
  loginService,
  saveRefreshToken,
  registerService,
} = require('../services/auth.service');

const generateAccessToken = async (email, role) => {
  return jwt.sign({ email, role }, config.accessTokenSecret, {
    expiresIn: '15m',
  });
};

const generateRefreshToken = async (email, role) => {
  const accessToken = jwt.sign({ email, role }, config.refreshTokenSecret, {
    expiresIn: '3h',
  });
  try {
    await saveRefreshToken(email, accessToken);
    return accessToken;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const login = async (req, res) => {
  // login controller logic
  try {
    const { email, password } = req.body;
    const user = await loginService(email, password);
    if (user) {
      const accessToken = await generateAccessToken(user.email, user.role);
      const refreshToken = await generateRefreshToken(user.email, user.role);
      return res.status(200).json({
        message: 'User logged in successfully',
        user,
        accessToken,
        refreshToken,
      });
    }
    return res.status(400).json({
      message: 'Invalid credentials',
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};

const register = async (req, res) => {
  // register controller logic
  try {
    const { username, email, password } = req.body;
    const user = await registerService(username, email, password);
    if (user) {
      return res.status(200).json({
        message: 'User registered successfully',
        user,
      });
    }
    return res.status(400).json({
      message: 'Invalid credentials',
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};

const refreshToken = async (req, res) => {
  // refresh token controller logic
};

const verifyRegisterOtp = async (req, res) => {
  // verify register otp controller logic
  console.log('verifyRegisterOtp');
  console.log(req.body);
};

module.exports = {
  login,
  register,
  refreshToken,
  verifyRegisterOtp,
};

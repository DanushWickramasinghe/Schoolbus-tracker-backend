const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../configs/config').jwt;
const { sendEmailOtp, generateOtp } = require('../utils/otp.service');
const {
  loginService,
  saveRefreshToken,
  registerService,
  saveTempUser,
  getTempUser,
  deleteTempUser,
  getUser,
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
  try {
    const { email, name, mobile_number, date_of_birth, address, role } =
      req.body;
    const user = await getUser(email);
    if (user) {
      return res.status(400).json({
        message: 'User already exists',
      });
    }

    const otp = generateOtp();
    const hashed_otp = await bcrypt.hash(otp.toString(), 10);
    const otp_expiry = new Date(Date.now() + 5 * 60000); // 5 minutes

    await sendEmailOtp(email, otp);

    await deleteTempUser(email);

    await saveTempUser(
      email,
      name,
      mobile_number,
      date_of_birth,
      address,
      role,
      hashed_otp,
      otp_expiry
    );

    return res.status(200).json({
      message: 'OTP sent successfully',
      email,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};

const verifyRegisterOtp = async (req, res) => {
  try {
    const { email, otp, password } = req.body;
    const tempUser = await getTempUser(email);
    if (!tempUser) {
      return res.status(400).json({
        message: 'Invalid email',
      });
    }

    if (tempUser.otp_expiry < new Date()) {
      await deleteTempUser(email);
      return res.status(400).json({
        message: 'OTP expired',
      });
    }

    const isValid = await bcrypt.compare(otp.toString(), tempUser.hashed_otp);

    if (!isValid) {
      return res.status(400).json({
        message: 'Invalid OTP',
      });
    }

    await registerService(tempUser, password);
    await deleteTempUser(email);

    return res.status(200).json({
      message: 'User registered successfully',
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

module.exports = {
  login,
  register,
  refreshToken,
  verifyRegisterOtp,
};

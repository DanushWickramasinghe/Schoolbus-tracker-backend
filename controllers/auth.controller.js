const { registerService, loginService } = require("../services/auth.service");

const login = async (req, res) => {
  // login controller logic
  try {
    const { username, password } = req.body;
    const user = await loginService(username, password);
    if (user) {
      return res.status(200).json({
        message: "User logged in successfully",
        user,
      });
    }
    return res.status(400).json({
      message: "Invalid credentials",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
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
        message: "User registered successfully",
        user,
      });
    }
    return res.status(400).json({
      message: "Invalid credentials",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const refreshToken = async (req, res) => {
  // refresh token controller logic
};

const verifyRegisterOtp = async (req, res) => {
  // verify register otp controller logic
};

module.exports = {
  login,
  register,
  refreshToken,
  verifyRegisterOtp,
};

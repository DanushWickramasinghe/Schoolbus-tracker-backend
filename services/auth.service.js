const bcrypt = require('bcrypt');

const UserPassword = require('../models/userPassword.model');
const UserRefreshToken = require('../models/userRefreshToken.model');
const User = require('../models/user.model');

const registerService = async (username, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
    console.log(user);
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const loginService = async (email, password) => {
  try {
    userPassword = await UserPassword.findOne({
      where: { email: email },
    });

    if (!userPassword) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      userPassword.password_hash
    );

    if (!isPasswordValid) {
      return null;
    }

    const user = await User.findOne({
      where: { email: email },
    });

    const completeUser = {
      ...user.dataValues,
      role: userPassword.role,
    };

    return completeUser;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const saveRefreshToken = async (email, refreshToken) => {
  try {
    await UserRefreshToken.create({
      email: email,
      refresh_token: refreshToken,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { registerService, loginService, saveRefreshToken };

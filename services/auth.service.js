const bcrypt = require('bcrypt');

const UserPassword = require('../models/userPassword.model');
const UserRefreshToken = require('../models/userRefreshToken.model');
const User = require('../models/user.model');
const TempUser = require('../models/tempUser.model');

const registerService = async (tempUser, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      email: tempUser.email,
      name: tempUser.name,
      mobile_number: tempUser.mobile_number,
      date_of_birth: tempUser.date_of_birth,
      address: tempUser.address,
    });

    await UserPassword.create({
      email: tempUser.email,
      password_hash: hashedPassword,
      role: tempUser.role,
    });
  } catch (error) {
    console.error(error);
  }
};

const getUser = async (email) => {
  try {
    const user = await User.findOne({
      where: { email: email },
    });

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

const saveTempUser = async (
  email,
  name,
  mobile_number,
  date_of_birth,
  address,
  role,
  hashed_otp,
  otp_expiry
) => {
  try {
    await TempUser.create({
      email: email,
      name: name,
      mobile_number: mobile_number,
      date_of_birth: date_of_birth,
      address: address,
      role: role,
      hashed_otp: hashed_otp,
      otp_expiry: otp_expiry,
    });
  } catch (error) {
    console.error(error);
  }
};

const getTempUser = async (email) => {
  try {
    const tempUser = await TempUser.findOne({
      where: { email: email },
    });

    return tempUser;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const deleteTempUser = async (email) => {
  try {
    await TempUser.destroy({
      where: { email: email },
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  registerService,
  loginService,
  saveRefreshToken,
  saveTempUser,
  getTempUser,
  deleteTempUser,
  getUser,
};

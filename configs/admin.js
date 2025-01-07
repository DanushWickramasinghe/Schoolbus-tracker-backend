const bcrypt = require("bcrypt");
const config = require("./config").admin;
const User = require("../models/user.model");
const UserPassword = require("../models/userPassword.model");

const createAdmin = async () => {
  const admin = {
    email: config.adminEmail,
    name: config.adminName,
    mobile_number: config.adminMobile,
    date_of_birth: config.adminDateOfBirth,
    address: config.adminAddress,
    role: config.adminRole,
  };

  const password = {
    email: config.adminEmail,
    password_hash: await bcrypt.hash(config.adminPassword, 10),
    role: config.adminRole,
  };

  try {
    await User.create(admin);
    await UserPassword.create(password);
    console.log("Admin created successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = createAdmin;

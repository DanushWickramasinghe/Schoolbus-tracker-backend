const { DataTypes } = require('sequelize');
const sequelize = require('../configs/db');

const TempUser = sequelize.define(
  'TempUser',
  {
    email: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hashed_otp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    otp_expiry: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: 'temp_user',
    timestamps: true,
  }
);

module.exports = TempUser;

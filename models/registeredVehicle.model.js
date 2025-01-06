const { DataTypes } = require("sequelize");
const sequelize = require("../configs/db");

const RegisteredVehicle = sequelize.define(
  "Registered-vehicles",
  {
    owner_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    owner_NIC_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vehicle_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vehicle_model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vehicle_number: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    starting_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    end_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    covered_cities: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "registered-vehicles",
    timestamps: true,
  }
);

module.exports = RegisteredVehicle;

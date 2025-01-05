const { DataTypes } = require('sequelize');
const sequelize = require('../configs/db');
const User = require('./user.model');

const UserPassword = sequelize.define(
  'UserPassword',
  {
    email: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
      references: {
        model: User,
        key: 'email',
      },
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'user_password',
    timestamps: true,
  }
);

UserPassword.belongsTo(User, {
  foreignKey: 'email',
  targetKey: 'email',
  onDelete: 'CASCADE',
});

module.exports = UserPassword;

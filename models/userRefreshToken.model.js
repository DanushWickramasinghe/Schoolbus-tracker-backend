const { DataTypes } = require('sequelize');
const sequelize = require('../configs/db');
const User = require('./user.model');

const UserRefreshToken = sequelize.define(
  'UserRefreshToken',
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
    refresh_token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'user_refresh_token',
    timestamps: true,
  }
);

UserRefreshToken.belongsTo(User, {
  foreignKey: 'email',
  targetKey: 'email',
  onDelete: 'CASCADE',
});

module.exports = UserRefreshToken;

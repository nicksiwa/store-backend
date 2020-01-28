'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Order);
    User.hasMany(models.Comment);
    User.hasMany(models.Address);
  };
  User.beforeCreate(async user => {
    try {
      const hashed = await bcrypt.hash(user.password, 10);
      user.password = hashed;
    } catch (err) {
      console.log(err);
    }
  });
  User.prototype.isValidPassword = async function (password) {
    const isValid = await bcrypt.compare(password, this.password);
    return isValid; 
  }
  return User;
};
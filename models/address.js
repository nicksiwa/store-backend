'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  Address.associate = function(models) {
    Address.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'cascade'
    });
  };
  return Address;
};
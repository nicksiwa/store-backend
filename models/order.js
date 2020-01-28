'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: DataTypes.INTEGER,
    addressId: DataTypes.INTEGER,
    orderStatusId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL
  }, {});
  Order.associate = function(models) {
    Order.hasMany(models.OrderItem);
    Order.belongsTo(models.User, {
      foreignKey: 'userId'
    });
    Order.belongsTo(models.Address, {
      foreignKey: 'addressId'
    });
    Order.belongsTo(models.OrderStatus, {
      foreignKey: 'orderStatusId'
    });
  };
  return Order;
};
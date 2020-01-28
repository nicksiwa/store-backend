'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('OrderItem', {
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  OrderItem.associate = function(models) {
    OrderItem.belongsTo(models.Order, {
      foreignKey: 'orderId',
      onDelete: 'cascade'
    });
    OrderItem.belongsTo(models.Product, {
      foreignKey: 'productId',
      onDelete: 'cascade'
    });
  };
  return OrderItem;
};
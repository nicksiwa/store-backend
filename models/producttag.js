'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductTag = sequelize.define('ProductTag', {
    productId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  ProductTag.associate = function(models) {
    ProductTag.belongsTo(models.Product, {
      foreignKey: 'productId',
      onUpdate: 'cascade',
      onDelete: 'cascade'
    });
    ProductTag.belongsTo(models.Tag, {
      foreignKey: 'tagId',
      onUpdate: 'cascade',
      onDelete: 'cascade'
    });
  };
  return ProductTag;
};
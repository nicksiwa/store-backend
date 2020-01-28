'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductCategory = sequelize.define('ProductCategory', {
    productId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {});
  ProductCategory.associate = function(models) {
    ProductCategory.belongsTo(models.Product, {
      as: 'product',
      foreignKey: 'productId'
    });
    ProductCategory.belongsTo(models.Category, {
      as: 'category',
      foreignKey: 'categoryId'
    });
  };
  return ProductCategory;
};
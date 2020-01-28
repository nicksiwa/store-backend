'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    description: DataTypes.STRING,
    price: {
      type: DataTypes.DECIMAL(20, 2),
    },
    stock: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    Product.hasMany(models.Comment);
    Product.hasMany(models.ProductImage, {
      as: 'images'
    });
    Product.belongsToMany(models.Category, {
      // foreignKey: 'productId'
      through: models.ProductCategory
    });
    Product.belongsToMany(models.Tag, {
      // foreignKey: 'productId'
      through: models.ProductTag
    });
  };
  return Product;
};
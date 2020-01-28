'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    Category.belongsToMany(models.Product, {
      through: models.ProductCategory
    });
    Category.hasMany(models.CategoryImage, {
      as: 'images'
    });
  };
  return Category;
};
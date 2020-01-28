'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductImage = sequelize.define('ProductImage', {
    productId: DataTypes.INTEGER,
    fileName: DataTypes.STRING,
    filePath: DataTypes.STRING,
    originalName: DataTypes.STRING,
    fileSize: DataTypes.INTEGER
  }, {});
  ProductImage.associate = function(models) {
    // associations can be defined here
  };
  return ProductImage;
};
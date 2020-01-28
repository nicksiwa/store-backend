'use strict';
module.exports = (sequelize, DataTypes) => {
  const CategoryImage = sequelize.define('CategoryImage', {
    categoryId: DataTypes.INTEGER,
    fileName: DataTypes.STRING,
    filePath: DataTypes.STRING,
    originalName: DataTypes.STRING,
    fileSize: DataTypes.INTEGER
  }, {});
  CategoryImage.associate = function(models) {
    // associations can be defined here
  };
  return CategoryImage;
};
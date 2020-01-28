'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.Product, {
      foreignKey: 'productId',
      onDelete: 'cascade'
    });
    Comment.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'cascade'
    });
  };
  return Comment;
};
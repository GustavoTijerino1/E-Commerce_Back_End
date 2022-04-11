const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
   
    id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
    
     product_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            // This references the `product model, which we set in `Product.js` as its `modelName` property
            model: 'product',
            key: 'id',
          }
        },
      
     tag_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            // This references the `Tag model, which we set in `Tag.js` as its `modelName` property
            model: 'tag',
            key: 'id',
          }
        },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;

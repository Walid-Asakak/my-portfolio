const {DataTypes, Model} = require('sequelize');
const { sequelize } = require('../config/sequelize');

class Category extends Model {}

Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name_category: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'category',
        timestamps: false
    }
);

module.exports = Category;
const {DataTypes, Model} = require('sequelize');
const { sequelize } = require('../config/sequelize');

class Image extends Model {}

Image.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        text_alt: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        display_order: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_project: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        sequelize,
        tableName: 'image',
        timestamps: false
    }
);

module.exports = Image;
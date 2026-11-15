const {DataTypes, Model} = require('sequelize');
const { sequelize } = require('../config/sequelize');

class Admin extends Model {}

Admin.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: 'admin',
        timestamps: false
    }
);

module.exports = Admin;
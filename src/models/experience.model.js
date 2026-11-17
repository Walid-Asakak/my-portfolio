const {DataTypes, Model} = require('sequelize');
const { sequelize } = require('../config/sequelize');

class Experience extends Model {}

Experience.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        company: {
            type: DataTypes.STRING(80),
            allowNull: false,
        },
        job_title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        start_date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        end_date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        }
    },
    {
        sequelize,
        tableName: 'experience',
        timestamps: false
    }
);

module.exports = Experience;
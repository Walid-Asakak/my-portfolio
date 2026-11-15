const {DataTypes, Model} = require('sequelize');
const { sequelize } = require('../config/sequelize');

class Skill extends Model {}

Skill.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        icon: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        id_category: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'category',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        tableName: 'skill',
        timestamps: false
    }
);

module.exports = Skill;
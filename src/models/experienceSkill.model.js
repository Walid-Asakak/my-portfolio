const {DataTypes, Model} = require('sequelize');
const { sequelize } = require('../config/sequelize');

class ProjectSkill extends Model {}

ProjectSkill.init(
    {
        id_experience: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        id_skill: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
    },
    {
        sequelize,
        tableName: 'experience_skill',
        timestamps: false
    }
);

module.exports = ProjectSkill;
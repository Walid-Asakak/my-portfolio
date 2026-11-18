const {DataTypes, Model} = require('sequelize');
const { sequelize } = require('../config/sequelize');

class ProjectSkill extends Model {}

ProjectSkill.init(
    {
        id_project: {
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
        tableName: 'project_skill',
        timestamps: false
    }
);

module.exports = ProjectSkill;
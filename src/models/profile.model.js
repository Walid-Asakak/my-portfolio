const {DataTypes, Model} = require('sequelize');
const { sequelize } = require('../config/sequelize');

class Profile extends Model {}

Profile.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        firstname: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        lastname: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        picture: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        github: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        linkedin: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        cv: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        id_admin: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'admin',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        tableName: 'profile',
        timestamps: false
    }
);

module.exports = Profile;
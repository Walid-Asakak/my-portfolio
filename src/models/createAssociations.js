
// File used to create the associations between all tables
// Documentation: https://sequelize.org/docs/v6/core-concepts/assocs/

const Admin = require('./admin.model');
const Profile = require('./profile.model');
const Message = require('./message.model');
const Category = require('./category.model');
const Skill = require('./skill.model');
const Project = require('./project.model');
const Image = require('./image.model');
const Experience = require('./experience.model');
const ProjectSkill = require('./projectSkill.model');
const ExperienceSkill = require('./experienceSkill.model');

// Admin & Profile : One-to-one relationship
Admin.hasOne(Profile, {
    foreignKey: 'id_admin',
    as: 'profile'
});

Profile.belongsTo(Admin, {
    foreignKey: 'id_admin',
    as: 'admin'
});

// Category & Skill : One-to-many relationship
Category.hasMany(Skill, {
    foreignKey: 'id_category',
    as: 'skills'
});

Skill.belongsTo(Category, {
    foreignKey: 'id_category',
    as: 'category'
});

// Project & Image : One-to-many relationship
Project.hasMany(Image, {
    foreignKey: 'id_project',
    as: 'images'
});

Image.belongsTo(Project, {
    foreignKey: 'id_project',
    as: 'project'
});

// Project & Skill : Many-to-many relationship
Project.belongsToMany(Skill, {
    through: ProjectSkill,
    foreignKey: 'id_project',
    otherKey: 'id_skill',
    as: 'skills'
});

Skill.belongsToMany(Project, {
    through: ProjectSkill,
    foreignKey: 'id_skill',
    otherKey: 'id_project',
    as: 'projects'
});

// Experience & Skill : Many-to-many relationship
Experience.belongsToMany(Skill, {
    through: ExperienceSkill,
    foreignKey: 'id_experience',
    otherKey: 'id_skill',
    as: 'skills'
});

Skill.belongsToMany(Experience, {
    through: ExperienceSkill,
    foreignKey: 'id_skill',
    otherKey: 'id_experience',
    as: 'experiences'
});

module.exports = {
    Admin,
    Profile,
    Message,
    Category,
    Skill,
    Project,
    Image,
    Experience,
    ProjectSkill,
    ExperienceSkill
};
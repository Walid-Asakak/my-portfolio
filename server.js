const Admin = require('./src/models/admin.model');
const Profile = require('./src/models/profile.model');
const Mssage = require('./src/models/message.model');
const Category = require('./src/models/category.model');
const Skill = require('./src/models/skill.model');
const { sequelize } = require('./src/config/sequelize');

async function startServer(){
    try {
        // Try database connection :
        await sequelize.authenticate();
        console.log('Database connection successful');

        // Synchronize Sequelize models with MySQL
        await sequelize.sync();
        console.log('Database synchronization successful');
    }
    catch(error){
        console.error('Unable to connect to the database:', error);
    }
}

// Use the function to start the server :
startServer();
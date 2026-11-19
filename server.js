const { sequelize } = require('./src/config/sequelize');
require('./src/models/createAssociations');

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
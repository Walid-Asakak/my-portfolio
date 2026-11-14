const { sequelize } = require('./src/config/Sequelize');

require('dotenv');

async function startServer(){
    // Try database connection :
    try {
        await sequelize.authenticate();
        console.log('Database connection successful');
    }

    catch(error){
        console.error('Unable to connect to the database:', error);
    }
}

// Use the function to start the server :
startServer();
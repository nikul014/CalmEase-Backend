const mysql = require('mysql2/promise');

const dbConfig = {
    host: 'database-1.cjqys04y48v1.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'Nikul25$',
    database: 'calmease',
    connectTimeout: 100000,
    ssl: { rejectUnauthorized: false }

};

module.exports = dbConfig;

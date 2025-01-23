const mysql = require('mysql2/promise');

const dbConfig = {
    host: '',
    user: '',
    password: '',
    database: '',
    connectTimeout: 100000,
    ssl: { rejectUnauthorized: false }

};

module.exports = dbConfig;

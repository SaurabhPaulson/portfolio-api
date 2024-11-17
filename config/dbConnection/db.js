const pgp = require('pg-promise')();
const db = pgp({
    user: 'postgres',
    host: 'localhost',
    database: 'saurabh-development-db',
    password: 'postgres',
    port: 5432,
});

module.exports = db;

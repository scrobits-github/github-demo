const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'kunal',
    password: 'password',
    database: 'users',
    port: 3306
})

module.exports = pool;
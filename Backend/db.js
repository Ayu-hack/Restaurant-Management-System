const mysql = require('mysql2/promise');

const mysqlpool = mysql.createPool({
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'restaurant',
})

mysqlpool.query('show tables;')
.then((data => console.log(data)))
.catch((err) => console.log('db connection falied. \n' +err))

module.exports = mysqlpool;

const mysql = require('mysql2/promise');

const mysqlpool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'restaurant',
})

// mysqlpool.query('SELECT * FROM Orders')
// .then((data => console.log(data)))
// .catch((err) => console.log('db connection falied. \n' +err))

module.exports = mysqlpool;

import mysql from 'mysql';

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    port: process.env.MYSQL_PORT || 3306,
    password: process.env.MYSQL_PASS || 'root',
    database: process.env.MYSQL_DATABASE || 'mini_tododb'
});

connection.connect(err => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

export { connection };
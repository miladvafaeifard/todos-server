import mysql from 'mysql';

const connection = mysql.createConnection({
    host: process.env.HOST || 'localhost',
    user: process.env.USER || 'root',
    password: process.env.PASS || 'root',
    database: process.env.DATABASE || 'mini_tododb'
});

connection.connect(err => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

export { connection };
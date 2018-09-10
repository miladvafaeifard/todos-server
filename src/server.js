import restify from 'restify';
import mysql from 'mysql';

import urlDecorator from './urlDecorator';
import { getBy, getAll, createNewTask } from './util';

export default function startServer() {
    const server = restify.createServer();
    server.use(restify.plugins.queryParser({ mapParams: false }));

    // TODO: we will replace this to restify-cors-middleware
    server.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        return next();
    });

    // probably needed for later
    // const decorateWithUrl = urlDecorator(server.router);

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'mini_tododb'
    });

    connection.connect(err => {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }

        console.log('connected as id ' + connection.threadId);
    });

    server.get('/todos', (req, res, next) => {
        connection.query(getAll(), function (err, results, fields) {
            if (err) throw err;
            res.send(results);
        });

        return next();
    });

    server.post('/todos', (req, res, next) => {
        const task = {
            id: req.query.id,
            text: req.query.text,
        };

        connection.query(createNewTask({task}), function (err, results, fields) {
            if (err) throw err;
            res.send(results);
        });

        return next();
    });

    server.get({ name: 'id', path: '/:id' }, (req, res, next) => {
        const getById = getBy('_id');
        connection.query(getById(req.params.id), function (err, results, fields) {
            if (err) throw err;
            res.send(results);
        });
        return next();
    });


    server.listen(process.env.PORT || 8080, () => {
        console.log(`Server started at ${process.env.PORT || 8080}`);
    });
}

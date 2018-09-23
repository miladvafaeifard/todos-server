import { connection } from '../../config/db.config';
import { getAll, createNewTask, getBy } from '../util';

const getTodos = (req, res, next) => {
    connection.query(getAll(), function (err, results, fields) {
        if (err) throw err;
        res.send(results);
    });

    return next();
}

const addTodo = (req, res, next) => {
    if (req.query.id && req.query.text) {
        const task = {
            id: req.query.id,
            text: req.query.text,
        };

        connection.query(createNewTask({
            task
        }), function (err, results) {
            if (err) throw err;
            res.send({
                messege: "",
                task
            });
        });
    } else {
        res.send({
            messege: "unknown queries"
        });
    }
    return next();
}

const getTodoById = (req, res, next) => {
    const getById = getBy('_id');
    connection.query(getById(req.params.id), function (err, results, fields) {
        if (err) throw err;
        res.send(results);
    });
    return next();
}

export const TodoController = {
    getTodos: getTodos,
    addTodo: addTodo,
    getTodoById: getTodoById,
}
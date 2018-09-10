const TABLE_NAME = 'todos';

export const getBy = column => value => {
    return `SELECT * FROM ${TABLE_NAME} WHERE ${column} = '${value}'`;
}

export const getAll = () => {
    return `SELECT *, (UNIX_TIMESTAMP(timestamp)*1000) AS unix_timestamp FROM ${TABLE_NAME}`;
}

export const createNewTask = ({task}) => {
    return `INSERT INTO ${TABLE_NAME} (_id, task) VALUES ("${task.id}","${task.text}")`;
}

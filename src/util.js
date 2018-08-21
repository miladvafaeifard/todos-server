export const getBy = column => value => {
    return `SELECT * FROM todos WHERE ${column} = '${value}'`;
}



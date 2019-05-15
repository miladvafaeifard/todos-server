const TABLE_NAME = 'todos';

export const getBy = column => value => {
  return `SELECT * FROM ${TABLE_NAME} WHERE ${column} = '${value}'`;
};

export const getAll = () => {
  return `SELECT *, (UNIX_TIMESTAMP(timestamp)*1000) AS unix_timestamp FROM ${TABLE_NAME}`;
};

export const updateTodo = ({ task }) => {
  return `UPDATE ${TABLE_NAME} SET task="${task.text}", completed=${task.completed} WHERE _id="${task.id}"`;
};

export const createNewTask = ({ task }) => {
  return `INSERT INTO ${TABLE_NAME} (_id, task) VALUES ("${task.id}","${task.text}")`;
};

export const deleteTask = ({ task }) => {
  return `DELETE FROM ${TABLE_NAME} WHERE _id='${task.id}'`;
};

export const router = (...routers) => {
  const applyRoutes = (server) => {
    routers.forEach(router => {
      router.forEach(route => {
        server[route.method || 'get']
        (
          route.url || '/',
          route.fn || NoFunction,
        );
      });
    });
  };

  return {
    applyRoutes: applyRoutes,
  };
};

const NoFunction = ((req, res, next) => {
  res.send('fn property required');
  next();
});

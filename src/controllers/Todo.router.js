import { TodoController } from './Todo'

export const TodoRouter = [{
        method: 'get',
        url: '/todos',
        fn: TodoController.getTodos
    },
    {
        method: 'put',
        url: '/todos',
        fn: TodoController.updateTodoById
    },
    {
        method: 'get',
        url: '/todos/:id',
        fn: TodoController.getTodoById
    },
    {
        method: 'post',
        url: '/todos',
        fn: TodoController.addTodo
    },
    {
        method: 'del',
        url: '/todos/:id',
        fn: TodoController.deleteTodoById
    },
];
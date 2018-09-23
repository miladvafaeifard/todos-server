import { TodoController } from './Todo'

export const TodoRouter = [{
        method: 'get',
        url: '/todos',
        fn: TodoController.getTodos
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
];
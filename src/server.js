import restify from 'restify';
import { connection } from '../config/db.config';
import { TodoRouter } from './controllers/Todo.router';
import { router } from './util';

export default function startServer() {
    const server = restify.createServer();
    server.use(restify.plugins.queryParser({ mapParams: false }));

    // TODO: we will replace this to restify-cors-middleware
    server.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        return next();
    });

    // router that as many parameters as can be applied to server
    // eg: router(TodoRoutes, userRouter, ...)
    const routers = router(TodoRouter);
    routers.applyRoutes(server);

    server.listen(process.env.PORT || 8080, () => {
        console.log(`Server started at ${process.env.PORT || 8080}`);
    });
}

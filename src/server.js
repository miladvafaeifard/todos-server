import restify from 'restify';
import corsMiddleware from 'restify-cors-middleware';
import morgan from 'morgan';
import { TodoRouter } from './controllers/Todo.router';
import { router } from './util';

export default function startServer() {      
    const server = restify.createServer({
        name: 'todoApp',
        version: '0.0.1',
    });

    const cors = corsMiddleware({
        preflightMaxAge: 5, //Optional
        origins: ['http://localhost:9000'],
        allowHeaders: ['*']
    });

    server.pre(cors.preflight);
    server.use(morgan('dev'));
    server.use(restify.plugins.queryParser({ mapParams: false }));
    server.use(cors.actual);
    server.use(restify.plugins.fullResponse());
    server.on('MethodNotAllowed', unknownMethodHandler);

    // router that as many parameters as can be applied to server
    // eg: router(TodoRoutes, userRouter, ...)
    const routers = router(TodoRouter);
    routers.applyRoutes(server);

    server.listen(process.env.NODE_PORT || 8080, () => {
        console.log(`Server started at ${process.env.NODE_PORT || 8080}`);
    });
}

const unknownMethodHandler = function (req, res) {
    if (req.method.toLowerCase() === 'options') {
        let allowHeaders = ['Accept', 'Accept-Version', 'Content-Type', 'Api-Version', 'Origin', 'X-Requested-With'];
        if (res.methods.indexOf('OPTIONS') === -1) {
            res.methods.push('OPTIONS');
        }
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Headers', allowHeaders.join(', '));
        res.header('Access-Control-Allow-Methods', res.methods.join(', '));
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        return res.send(204);
    } else {
        return res.send(new restify.MethodNotAllowedError());
    }
};

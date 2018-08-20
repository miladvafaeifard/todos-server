import restify from 'restify';
import urlDecorator from './urlDecorator';

export default function startServer() {
    const server = restify.createServer();
    server.use(restify.plugins.bodyParser());

    // TODO: we will replace this to restify-cors-middleware
    server.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        return next();
    });

    const decorateWithUrl = urlDecorator(server.router);

    server.get('/', (req, res, next) => {
        res.send('Hello World');
        return next();
    });

    server.listen(process.env.PORT || 8080, () => {
        console.log(`Server started at ${process.env.PORT || 8080}`);
    });
}
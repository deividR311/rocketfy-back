import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import appRouter from '../routes/routes';

class Server {
    public app: express.Application;

    constructor() {
        this.app = express();

        //DATABASE CONNECTION
        this.dataBaseConnection();
        // MIDDLEWARES
        this.middlewares();
        // ROUTES
        this.routes();
    }

    dataBaseConnection() { }

    middlewares() {
        // CORS
        this.app.use(cors());
        // READ AND CONVERT THE BODY
        this.app.use(express.json());

        this.app.use(helmet.hidePoweredBy());
    }

    routes() {
        appRouter(this.app);
    }

    start(callback: () => void) {
        this.app.listen(process.env.PORT, callback);
    }
}

export default Server;
import express from 'express';
import cors from 'cors';

import appRouter from '../routes/routes';
import database from '../settings/database';

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

    async dataBaseConnection() {
        await database.connection();
    }

    middlewares() {
        // CORS
        this.app.use(cors());
        // READ AND CONVERT THE BODY
        this.app.use(express.json());
    }

    routes() {
        appRouter(this.app);
    }

    start(callback: () => void) {
        this.app.listen(process.env.PORT, callback);
    }
}

export default Server;
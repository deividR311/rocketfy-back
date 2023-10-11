"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const routes_1 = __importDefault(require("../routes/routes"));
class Server {
    constructor() {
        this.app = express_1.default();
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
        this.app.use(cors_1.default());
        // READ AND CONVERT THE BODY
        this.app.use(express_1.default.json());
        this.app.use(helmet_1.default.hidePoweredBy());
    }
    routes() {
        routes_1.default(this.app);
    }
    start(callback) {
        this.app.listen(process.env.PORT, callback);
    }
}
exports.default = Server;

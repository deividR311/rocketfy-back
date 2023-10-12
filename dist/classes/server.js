"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("../routes/routes"));
const database_1 = __importDefault(require("../settings/database"));
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
    dataBaseConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.connection();
        });
    }
    middlewares() {
        // CORS
        this.app.use(cors_1.default());
        // READ AND CONVERT THE BODY
        this.app.use(express_1.default.json());
    }
    routes() {
        routes_1.default(this.app);
    }
    start(callback) {
        this.app.listen(process.env.PORT, callback);
    }
}
exports.default = Server;

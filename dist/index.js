"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("./models/models");
const server_1 = __importDefault(require("./classes/server"));
const server = new server_1.default();
server.start(() => {
    console.log(`Server running in ${process.env.PORT}`);
});
exports.default = server;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = __importDefault(require("../settings/Logger"));
const errors_1 = __importDefault(require("../settings/errors"));
const success_1 = __importDefault(require("../settings/success"));
class BaseController {
    constructor() {
        this.logger = Logger_1.default();
        this.success = success_1.default;
        this.errors = errors_1.default;
    }
}
exports.default = BaseController;

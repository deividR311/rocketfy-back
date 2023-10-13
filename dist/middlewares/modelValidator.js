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
const node_input_validator_1 = require("node-input-validator");
const modelValidatorErrors_1 = __importDefault(require("../settings/modelValidatorErrors"));
class ModelValidator {
    constructor() {
        this.product = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            const validator = new node_input_validator_1.Validator(body, {
                name: 'string|required',
                description: 'string|required',
                sku: 'string|required',
                image: 'string|required',
                price: 'numeric|required',
                stock: 'numeric|required',
                tags: 'array|required',
                'tags.*.tagId': 'required'
            }, modelValidatorErrors_1.default);
            let matched = yield validator.check();
            (matched)
                ? next()
                : res.status(406).send(validator.errors);
        });
        this.tag = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            const validator = new node_input_validator_1.Validator(body, {
                name: 'string|required',
            }, modelValidatorErrors_1.default);
            let matched = yield validator.check();
            (matched)
                ? next()
                : res.status(406).send(validator.errors);
        });
    }
}
exports.default = ModelValidator;

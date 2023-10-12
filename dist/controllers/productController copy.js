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
exports.ProductController = void 0;
const services_1 = require("../services");
const baseController_1 = __importDefault(require("./baseController"));
class ProductController extends baseController_1.default {
    constructor() {
        super();
        this.getProducts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield this.productService.getProducts();
                res.status(200).json({
                    status: this.success.success,
                    message: this.success.message,
                    products
                });
            }
            catch (err) {
                this.logger.error("setTags@ProductController " + JSON.stringify(err) + err);
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
        this.getProductById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const product = yield this.productService.getProductById(id);
                res.status(200).json({
                    status: this.success.success,
                    message: this.success.message,
                    product
                });
            }
            catch (err) {
                this.logger.error("setTags@ProductController " + JSON.stringify(err) + err);
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
        this.createProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = req;
                const product = yield this.productService.createProduct(body);
                res.status(201).json({
                    status: this.success.success,
                    message: this.success.message,
                    product
                });
            }
            catch (err) {
                this.logger.error("setTags@ProductController " + JSON.stringify(err) + err);
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
        this.updateProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { body, params: { id } } = req;
                const product = yield this.productService.updateProduct(id, body);
                res.status(201).json({
                    status: this.success.success,
                    message: this.success.message,
                    product
                });
            }
            catch (err) {
                this.logger.error("setTags@ProductController " + JSON.stringify(err) + err);
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
        this.deleteProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const product = yield this.productService.deleteProduct(id);
                res.status(200).json({
                    status: this.success.success,
                    message: this.success.message,
                    product
                });
            }
            catch (err) {
                this.logger.error("setTags@ProductController " + JSON.stringify(err) + err);
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
        this.productService = new services_1.ProductService();
    }
}
exports.ProductController = ProductController;
;

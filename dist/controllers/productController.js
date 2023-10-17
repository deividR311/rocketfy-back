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
const statusResponse_1 = require("../helpers/statusResponse");
class ProductController extends baseController_1.default {
    constructor() {
        super();
        this.getProducts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield this.productService.getProducts();
                statusResponse_1.statusResponse(200, this.success.message, res, products, this.success.success);
            }
            catch (err) {
                this.logger.error("setTags@ProductController " + JSON.stringify(err) + err);
                statusResponse_1.statusResponse(500, this.errors.internal_server_error, res, err, this.errors.error);
            }
        });
        this.getProductById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const product = yield this.productService.getProductById(id);
                const tags = yield this.productTagService.getProductTagByProductId(id);
                statusResponse_1.statusResponse(200, this.success.message, res, { product, tags }, this.success.success);
            }
            catch (err) {
                this.logger.error("setTags@ProductController " + JSON.stringify(err) + err);
                statusResponse_1.statusResponse(500, this.errors.internal_server_error, res, err, this.errors.error);
            }
        });
        this.createProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = req;
                const product = yield this.productService.createProduct(body);
                const tags = yield this.productTagService.createProductTag(body.tags, product._id);
                yield this.priceRecordService.createPriceRecord(product);
                yield this.stockRecordService.createStockRecord(product);
                statusResponse_1.statusResponse(201, this.success.message, res, { product, tags }, this.success.success);
            }
            catch (err) {
                this.logger.error("setTags@ProductController " + JSON.stringify(err) + err);
                statusResponse_1.statusResponse(500, this.errors.internal_server_error, res, err, this.errors.error);
            }
        });
        this.updateProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { body, params: { id } } = req;
                const product = yield this.productService.updateProduct(id, body);
                yield this.productTagService.deleteProductTag(id);
                const tags = yield this.productTagService.createProductTag(body.tags, id);
                if (body.price) {
                    yield this.priceRecordService.createPriceRecord(product);
                }
                if (body.stock) {
                    yield this.stockRecordService.createStockRecord(product);
                }
                statusResponse_1.statusResponse(201, this.success.message, res, { product, tags }, this.success.success);
            }
            catch (err) {
                this.logger.error("setTags@ProductController " + JSON.stringify(err) + err);
                statusResponse_1.statusResponse(500, this.errors.internal_server_error, res, err, this.errors.error);
            }
        });
        this.deleteProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const product = yield this.productService.deleteProduct(id);
                const tags = yield this.productTagService.deleteProductTag(id);
                statusResponse_1.statusResponse(201, this.success.message, res, { product, tags }, this.success.success);
            }
            catch (err) {
                this.logger.error("setTags@ProductController " + JSON.stringify(err) + err);
                statusResponse_1.statusResponse(500, this.errors.internal_server_error, res, err, this.errors.error);
            }
        });
        this.productService = new services_1.ProductService();
        this.priceRecordService = new services_1.PriceRecordService();
        this.stockRecordService = new services_1.StockRecordService();
        this.productTagService = new services_1.ProductTagService();
    }
}
exports.ProductController = ProductController;
;

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
exports.ProductService = void 0;
const baseService_1 = __importDefault(require("./baseService"));
class ProductService extends baseService_1.default {
    constructor() {
        super();
        this.createProductTag = (productTag) => __awaiter(this, void 0, void 0, function* () {
            try {
                let response = new this.productTag(productTag);
                return yield response.save();
            }
            catch (err) {
                throw err;
            }
        });
        this.getProducts = () => __awaiter(this, void 0, void 0, function* () {
            try {
                let products = yield this.product.find();
                return products;
            }
            catch (err) {
                throw err;
            }
        });
        this.getProductById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                let product = yield this.product.findOne({ _id: id }).exec();
                return product;
            }
            catch (err) {
                throw err;
            }
        });
        this.createProduct = (product) => __awaiter(this, void 0, void 0, function* () {
            try {
                let response = new this.product(product);
                return response.save();
            }
            catch (err) {
                throw err;
            }
        });
        this.updateProduct = (id, product) => __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield this.product.findByIdAndUpdate(id, product);
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.deleteProduct = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield this.product.findByIdAndDelete(id);
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.product = this.models.Product;
        this.productTag = this.models.ProductTag;
    }
}
exports.ProductService = ProductService;
;

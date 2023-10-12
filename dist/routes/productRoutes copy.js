"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const modelValidator_1 = __importDefault(require("../middlewares/modelValidator"));
const productRoutes = express_1.Router();
const productController = new controllers_1.ProductController();
const productValidator = new modelValidator_1.default();
productRoutes.get('/getAll', productController.getProducts);
productRoutes.get('/:id', productController.getProductById);
productRoutes.post('/create', productValidator.product, productController.createProduct);
productRoutes.put('/:id', productController.updateProduct);
productRoutes.delete('/delete', productController.deleteProduct);
exports.default = productRoutes;

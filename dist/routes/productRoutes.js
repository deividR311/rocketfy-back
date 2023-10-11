"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const productRoutes = express_1.Router();
const productController = new controllers_1.ProductController();
productRoutes.get('/getAll', productController.getProducts);
exports.default = productRoutes;

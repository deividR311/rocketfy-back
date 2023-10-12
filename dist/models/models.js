"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const priceRecord_1 = __importDefault(require("./priceRecord"));
const productModel_1 = __importDefault(require("./productModel"));
const productTag_1 = __importDefault(require("./productTag"));
const stockRecord_1 = __importDefault(require("./stockRecord"));
const tagModel_1 = __importDefault(require("./tagModel"));
priceRecord_1.default.init();
productModel_1.default.init();
productTag_1.default.init();
stockRecord_1.default.init();
tagModel_1.default.init();

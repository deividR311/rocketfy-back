"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const priceRecordModel_1 = __importDefault(require("./priceRecordModel"));
const productModel_1 = __importDefault(require("./productModel"));
const productTagModel_1 = __importDefault(require("./productTagModel"));
const stockRecordModel_1 = __importDefault(require("./stockRecordModel"));
const tagModel_1 = __importDefault(require("./tagModel"));
priceRecordModel_1.default.init();
productModel_1.default.init();
productTagModel_1.default.init();
stockRecordModel_1.default.init();
tagModel_1.default.init();

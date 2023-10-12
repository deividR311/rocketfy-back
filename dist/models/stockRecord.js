"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const StockRecordSchema = new mongoose_1.Schema({
    productId: { type: String, required: true },
    stock: { type: Number, required: true }
}, { timestamps: { createdAt: 'created_at' } });
const StockRecordModel = mongoose_1.model('StockRecord', StockRecordSchema);
exports.default = StockRecordModel;

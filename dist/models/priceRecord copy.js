"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PriceRecordSchema = new mongoose_1.Schema({
    productId: { type: String, required: true },
    price: { type: Number, required: true }
}, { timestamps: { createdAt: 'created_at' } });
const PriceRecordModel = mongoose_1.model('PriceRecord', PriceRecordSchema);
exports.default = PriceRecordModel;

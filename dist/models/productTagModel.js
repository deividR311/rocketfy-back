"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductTagSchema = new mongoose_1.Schema({
    productId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Product' },
    tagId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Tag' }
}, { timestamps: { createdAt: 'created_at' } });
const ProductTagModel = mongoose_1.model('ProductTag', ProductTagSchema);
exports.default = ProductTagModel;

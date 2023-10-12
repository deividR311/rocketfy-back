"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TagSchema = new mongoose_1.Schema({
    name: { type: String, required: true }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });
const TagModel = mongoose_1.model('Tag', TagSchema);
exports.default = TagModel;

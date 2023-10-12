"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const modelValidator_1 = __importDefault(require("../middlewares/modelValidator"));
const tagRoutes = express_1.Router();
const tagController = new controllers_1.TagController();
const TagValidator = new modelValidator_1.default();
tagRoutes.get('/getAll', tagController.getTags);
tagRoutes.get('/:id', tagController.getTagById);
tagRoutes.post('/create', TagValidator.tag, tagController.createTag);
tagRoutes.put('/:id', tagController.updateTag);
tagRoutes.delete('/:id', tagController.deleteTag);
exports.default = tagRoutes;

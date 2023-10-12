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
exports.TagController = void 0;
const services_1 = require("../services");
const baseController_1 = __importDefault(require("./baseController"));
class TagController extends baseController_1.default {
    constructor() {
        super();
        this.getTags = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const tags = yield this.tagService.getTags();
                res.status(200).json({
                    status: this.success.success,
                    message: this.success.message,
                    tags
                });
            }
            catch (err) {
                this.logger.error("setTags@TagController " + JSON.stringify(err) + err);
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
        this.getTagById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const tag = yield this.tagService.getTagById(id);
                res.status(200).json({
                    status: this.success.success,
                    message: this.success.message,
                    tag
                });
            }
            catch (err) {
                this.logger.error("setTags@TagController " + JSON.stringify(err) + err);
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
        this.createTag = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = req;
                const tag = yield this.tagService.createTag(body);
                res.status(201).json({
                    status: this.success.success,
                    message: this.success.message,
                    tag
                });
            }
            catch (err) {
                this.logger.error("setTags@TagController " + JSON.stringify(err) + err);
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
        this.updateTag = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { body, params: { id } } = req;
                const tag = yield this.tagService.updateTag(id, body);
                res.status(201).json({
                    status: this.success.success,
                    message: this.success.message,
                    tag
                });
            }
            catch (err) {
                this.logger.error("setTags@TagController " + JSON.stringify(err) + err);
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
        this.deleteTag = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const tag = yield this.tagService.deleteTag(id);
                res.status(200).json({
                    status: this.success.success,
                    message: this.success.message,
                    tag
                });
            }
            catch (err) {
                this.logger.error("setTags@TagController " + JSON.stringify(err) + err);
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
        this.tagService = new services_1.TagService();
    }
}
exports.TagController = TagController;
;

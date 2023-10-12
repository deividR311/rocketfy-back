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
exports.TagService = void 0;
const baseService_1 = __importDefault(require("./baseService"));
class TagService extends baseService_1.default {
    constructor() {
        super();
        this.getTags = () => __awaiter(this, void 0, void 0, function* () {
            try {
                let tags = yield this.tag.find();
                return tags;
            }
            catch (err) {
                throw err;
            }
        });
        this.getTagById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                let tag = yield this.tag.findById(id);
                return tag;
            }
            catch (err) {
                throw err;
            }
        });
        this.createTag = (tag) => __awaiter(this, void 0, void 0, function* () {
            try {
                let response = new this.tag(tag);
                return response.save();
            }
            catch (err) {
                throw err;
            }
        });
        this.updateTag = (id, tag) => __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield this.tag.findByIdAndUpdate(id, tag);
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.deleteTag = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield this.tag.findByIdAndDelete(id);
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.tag = this.models.Tag;
    }
}
exports.TagService = TagService;
;

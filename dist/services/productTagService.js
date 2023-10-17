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
exports.ProductTagService = void 0;
const baseService_1 = __importDefault(require("./baseService"));
class ProductTagService extends baseService_1.default {
    constructor() {
        super();
        this.createProductTag = (tags, id) => __awaiter(this, void 0, void 0, function* () {
            try {
                let productTags = tags.map(tag => {
                    let response = {
                        productId: id,
                        tagId: tag._id
                    };
                    return response;
                });
                let response = yield this.productTag.insertMany(productTags);
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.getProductTagByProductId = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                let tags = yield this.productTag.find({ productId: id }).populate('tagId').exec();
                return tags;
            }
            catch (err) {
                throw err;
            }
        });
        this.deleteProductTag = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield this.productTag.deleteMany({ productId: id });
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.productTag = this.models.ProductTag;
    }
}
exports.ProductTagService = ProductTagService;
;

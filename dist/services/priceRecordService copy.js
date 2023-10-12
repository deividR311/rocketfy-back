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
exports.PriceRecordService = void 0;
const baseService_1 = __importDefault(require("./baseService"));
class PriceRecordService extends baseService_1.default {
    constructor() {
        super();
        this.getPriceRecordByProductId = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                let PriceRecord = yield this.priceRecord.find({ productId: id }).exec();
                return PriceRecord;
            }
            catch (err) {
                throw err;
            }
        });
        this.createPriceRecord = (product) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { _id, price } = product;
                let response = new this.priceRecord({ productId: _id, price });
                return response.save();
            }
            catch (err) {
                throw err;
            }
        });
        this.priceRecord = this.models.PriceRecord;
    }
}
exports.PriceRecordService = PriceRecordService;
;

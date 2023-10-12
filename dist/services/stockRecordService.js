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
exports.StockRecordService = void 0;
const baseService_1 = __importDefault(require("./baseService"));
class StockRecordService extends baseService_1.default {
    constructor() {
        super();
        this.getStockRecordByProductId = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                let StockRecord = yield this.stockRecord.find({ productId: id }).exec();
                return StockRecord;
            }
            catch (err) {
                throw err;
            }
        });
        this.createStockRecord = (product) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { _id, stock } = product;
                let response = new this.stockRecord({ productId: _id, stock });
                return response.save();
            }
            catch (err) {
                throw err;
            }
        });
        this.stockRecord = this.models.StockRecord;
    }
}
exports.StockRecordService = StockRecordService;
;

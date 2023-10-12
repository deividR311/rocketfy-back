import { Model } from "mongoose";
import BaseService from "./baseService";
import { StockRecord, Product } from "../interfaces";

export class StockRecordService extends BaseService {
    stockRecord: Model<StockRecord>;

    constructor() {
        super();

        this.stockRecord = this.models.StockRecord;
    }

    getStockRecordByProductId = async (id: string) => {
        try {
            let StockRecord = await this.stockRecord.find({ productId: id }).exec();
            return StockRecord;
        } catch (err) {
            throw err;
        }
    }

    createStockRecord = async (product: Product) => {
        try {
            const { _id, stock } = product;
            let response = new this.stockRecord({ productId: _id, stock });
            return response.save();
        } catch (err) {
            throw err;
        }
    }
};
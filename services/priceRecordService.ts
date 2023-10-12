import { Model } from "mongoose";
import BaseService from "./baseService";
import { PriceRecord, Product, ProductTag } from "../interfaces";

export class PriceRecordService extends BaseService {
    priceRecord: Model<PriceRecord>;
    productTag: Model<ProductTag>;

    constructor() {
        super();

        this.priceRecord = this.models.PriceRecord;
        this.productTag = this.models.ProductTag;
    }

    getPriceRecordByProductId = async (id: string) => {
        try {
            let PriceRecord = await this.priceRecord.find({ productId: id }).exec();
            return PriceRecord;
        } catch (err) {
            throw err;
        }
    }

    createPriceRecord = async (product: Product) => {
        try {
            const { _id, price } = product;
            let response = new this.priceRecord({ productId: _id, price });
            return response.save();
        } catch (err) {
            throw err;
        }
    }
};
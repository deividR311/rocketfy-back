import { Model, ObjectId } from "mongoose";
import BaseService from "./baseService";
import { ProductTag } from "../interfaces";

export class ProductTagService extends BaseService {
    productTag: Model<ProductTag>;

    constructor() {
        super();

        this.productTag = this.models.ProductTag;
    }

    createProductTag = async (productTags: ProductTag[], id: ObjectId | string) => {
        try {
            let tags = productTags.map(tag => { tag.productId = id; return tag; });
            let response = await this.productTag.insertMany(tags);
            return response;
        } catch (err) {
            throw err;
        }
    }

    getProductTagByProductId = async (id: string) => {
        try {
            let tags = await this.productTag.find({ productId: id }).populate('tagId').exec();
            return tags;
        } catch (err) {
            throw err;
        }
    }

    deleteProductTag = async (id: string) => {
        try {
            let response = await this.productTag.deleteMany({ productId: id });
            return response;
        } catch (err) {
            throw err;
        }
    }
};
import { Model, ObjectId } from "mongoose";
import BaseService from "./baseService";
import { ProductTag, Tag } from "../interfaces";

export class ProductTagService extends BaseService {
    productTag: Model<ProductTag>;

    constructor() {
        super();

        this.productTag = this.models.ProductTag;
    }

    createProductTag = async (tags: Tag[], id: ObjectId | string) => {
        try {
            let productTags = tags.map(tag => {
                let response = {
                    productId: id,
                    tagId: tag._id
                };
                return response;
            });

            let response = await this.productTag.insertMany(productTags);
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
import { Model } from "mongoose";
import BaseService from "./baseService";
import { Product, ProductTag } from "../interfaces";

export class ProductService extends BaseService {
    product: Model<Product>;
    productTag: Model<ProductTag>;

    constructor() {
        super();

        this.product = this.models.Product;
        this.productTag = this.models.ProductTag;
    }

    createProductTag = async (productTag: ProductTag) => {
        try {
            let response = new this.productTag(productTag);
            return await response.save();
        } catch (err) {
            throw err;
        }
    }

    getProducts = async () => {
        try {
            let products = await this.product.find();
            return products;
        } catch (err) {
            throw err;
        }
    }

    getProductById = async (id: string) => {
        try {
            let product = await this.product.findOne({ _id: id }).exec();
            return product;
        } catch (err) {
            throw err;
        }
    }

    createProduct = async (product: Product) => {
        try {
            let response = new this.product(product);
            return response.save();
        } catch (err) {
            throw err;
        }
    }

    updateProduct = async (id: string, product: Product) => {
        try {
            let response = await this.product.findByIdAndUpdate(id, product);
            return response;
        } catch (err) {
            throw err;
        }
    }

    deleteProduct = async (id: string) => {
        try {
            let response = await this.product.findByIdAndDelete(id);
            return response;
        } catch (err) {
            throw err;
        }
    }
};
import { ObjectId } from "mongoose";
import { ProductTag } from "./productTag";

export interface Product {
    _id: ObjectId;
    name: string;
    description: string;
    sku: string;
    image: string;
    price: number;
    stock: number;
    tags: Array<ProductTag>;
}
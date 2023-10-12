import { ObjectId } from "mongoose";

export interface Product {
    _id: ObjectId;
    name: string;
    description: string;
    sku: string;
    image: string;
    price: number;
    stock: number;
}
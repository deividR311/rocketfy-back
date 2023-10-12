import { ObjectId } from "mongoose";

export interface StockRecord {
    productId: ObjectId;
    stock: number;
}
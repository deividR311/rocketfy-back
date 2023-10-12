import { ObjectId } from "mongoose";

export interface PriceRecord {
    productId: ObjectId;
    price: number;
}
import { ObjectId } from "mongoose";

export interface ProductTag {
    productId: ObjectId | string;
    tagId: ObjectId;
}
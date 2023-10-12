import { ObjectId } from "mongoose";

export interface ProductTag {
    productId: ObjectId;
    tagId: ObjectId;
}
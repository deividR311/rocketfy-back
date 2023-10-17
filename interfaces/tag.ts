import { ObjectId } from "mongoose";

export interface Tag {
    _id: ObjectId | string;
    name: string;
}
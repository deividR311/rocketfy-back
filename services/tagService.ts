import { Model } from "mongoose";
import BaseService from "./baseService";
import { Tag } from "../interfaces";

export class TagService extends BaseService {
    tag: Model<Tag>;

    constructor() {
        super();

        this.tag = this.models.Tag;
    }

    getTags = async () => {
        try {
            let tags = await this.tag.find();
            return tags;
        } catch (err) {
            throw err;
        }
    }

    getTagById = async (id: string) => {
        try {
            let tag = await this.tag.findById(id)
            return tag;
        } catch (err) {
            throw err;
        }
    }

    createTag = async (tag: Tag) => {
        try {
            let response = new this.tag(tag);
            return response.save();
        } catch (err) {
            throw err;
        }
    }

    updateTag = async (id: string, tag: Tag) => {
        try {
            let response = await this.tag.findByIdAndUpdate(id, tag);
            return response;
        } catch (err) {
            throw err;
        }
    }

    deleteTag = async (id: string) => {
        try {
            let response = await this.tag.findByIdAndDelete(id);
            return response;
        } catch (err) {
            throw err;
        }
    }
};
import { Request, Response } from "express";
import { TagService } from "../services";
import BaseController from "./baseController";
import { statusResponse } from "../helpers/statusResponse";

export class TagController extends BaseController {
    tagService: TagService;

    constructor() {
        super();
        this.tagService = new TagService();
    }

    getTags = async (req: Request, res: Response) => {
        try {
            const tags = await this.tagService.getTags();
            statusResponse(200, this.success.message, res, tags, this.success.success);
        } catch (err: any) {
            this.logger.error("setTags@TagController " + JSON.stringify(err) + err);
            statusResponse(500, this.errors.internal_server_error, res, err, this.errors.error);
        }
    }

    getTagById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const tag = await this.tagService.getTagById(id);
            statusResponse(200, this.success.message, res, tag, this.success.success);
        } catch (err: any) {
            this.logger.error("setTags@TagController " + JSON.stringify(err) + err);
            statusResponse(500, this.errors.internal_server_error, res, err, this.errors.error);
        }
    }

    createTag = async (req: Request, res: Response) => {
        try {
            const { body } = req;
            const tag = await this.tagService.createTag(body);
            statusResponse(201, this.success.message, res, tag, this.success.success);
        } catch (err: any) {
            this.logger.error("setTags@TagController " + JSON.stringify(err) + err);
            statusResponse(500, this.errors.internal_server_error, res, err, this.errors.error);
        }
    }

    updateTag = async (req: Request, res: Response) => {
        try {
            const { body, params: { id } } = req;
            const tag = await this.tagService.updateTag(id, body);
            statusResponse(201, this.success.message, res, tag, this.success.success);
        } catch (err: any) {
            this.logger.error("setTags@TagController " + JSON.stringify(err) + err);
            statusResponse(500, this.errors.internal_server_error, res, err, this.errors.error);
        }
    }

    deleteTag = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const tag = await this.tagService.deleteTag(id);
            statusResponse(200, this.success.message, res, tag, this.success.success);
        } catch (err: any) {
            this.logger.error("setTags@TagController " + JSON.stringify(err) + err);
            statusResponse(500, this.errors.internal_server_error, res, err, this.errors.error);
        }
    }
};
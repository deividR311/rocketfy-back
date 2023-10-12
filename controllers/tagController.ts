import { Request, Response } from "express";
import { TagService } from "../services";
import BaseController from "./baseController";

export class TagController extends BaseController {
    tagService: TagService;

    constructor() {
        super();
        this.tagService = new TagService();
    }

    getTags = async (req: Request, res: Response) => {
        try {
            const tags = await this.tagService.getTags();
            res.status(200).json({
                status: this.success.success,
                message: this.success.message,
                tags
            })
        } catch (err: any) {
            this.logger.error("setTags@TagController " + JSON.stringify(err) + err);
            res.status(500).json({
                status: this.errors.error,
                message: this.errors.internal_server_error,
                response: err
            });
        }
    }

    getTagById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const tag = await this.tagService.getTagById(id);
            res.status(200).json({
                status: this.success.success,
                message: this.success.message,
                tag
            })
        } catch (err: any) {
            this.logger.error("setTags@TagController " + JSON.stringify(err) + err);
            res.status(500).json({
                status: this.errors.error,
                message: this.errors.internal_server_error,
                response: err
            });
        }
    }

    createTag = async (req: Request, res: Response) => {
        try {
            const { body } = req;
            const tag = await this.tagService.createTag(body);
            res.status(201).json({
                status: this.success.success,
                message: this.success.message,
                tag
            })
        } catch (err: any) {
            this.logger.error("setTags@TagController " + JSON.stringify(err) + err);
            res.status(500).json({
                status: this.errors.error,
                message: this.errors.internal_server_error,
                response: err
            });
        }
    }

    updateTag = async (req: Request, res: Response) => {
        try {
            const { body, params: { id } } = req;
            const tag = await this.tagService.updateTag(id, body);
            res.status(201).json({
                status: this.success.success,
                message: this.success.message,
                tag
            })
        } catch (err: any) {
            this.logger.error("setTags@TagController " + JSON.stringify(err) + err);
            res.status(500).json({
                status: this.errors.error,
                message: this.errors.internal_server_error,
                response: err
            });
        }
    }

    deleteTag = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const tag = await this.tagService.deleteTag(id);
            res.status(200).json({
                status: this.success.success,
                message: this.success.message,
                tag
            })
        } catch (err: any) {
            this.logger.error("setTags@TagController " + JSON.stringify(err) + err);
            res.status(500).json({
                status: this.errors.error,
                message: this.errors.internal_server_error,
                response: err
            });
        }
    }
};
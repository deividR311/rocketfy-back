import { Request, Response } from "express";
import { ProductService } from "../services";
import BaseController from "./baseController";

export class ProductController extends BaseController {
    productService: ProductService;

    constructor() {
        super();
        this.productService = new ProductService();
    }

    async getProducts(req: Request, res: Response) {
        try {
            res.status(200).json({
                response: 'ok'
            })
        } catch (err: any) {
            this.logger.error("setTags@ProductController " + JSON.stringify(err) + err);
            console.log(err);
        }
    }
};
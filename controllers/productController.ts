import { Request, Response } from "express";
import { ProductService, PriceRecordService, StockRecordService, ProductTagService } from "../services";
import BaseController from "./baseController";
import { statusResponse } from "../helpers/statusResponse";

export class ProductController extends BaseController {
    productService: ProductService;
    priceRecordService: PriceRecordService;
    stockRecordService: StockRecordService;
    productTagService: ProductTagService;

    constructor() {
        super();
        this.productService = new ProductService();
        this.priceRecordService = new PriceRecordService();
        this.stockRecordService = new StockRecordService();
        this.productTagService = new ProductTagService();
    }

    getProducts = async (req: Request, res: Response) => {
        try {
            const products = await this.productService.getProducts();
            statusResponse(200, this.success.message, res, products, this.success.success);
        } catch (err: any) {
            this.logger.error("setTags@ProductController " + JSON.stringify(err) + err);
            statusResponse(500, this.errors.internal_server_error, res, err, this.errors.error);
        }
    }

    getProductById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const product = await this.productService.getProductById(id);
            const tags = await this.productTagService.getProductTagByProductId(id);
            statusResponse(200, this.success.message, res, { product, tags }, this.success.success);
        } catch (err: any) {
            this.logger.error("setTags@ProductController " + JSON.stringify(err) + err);
            statusResponse(500, this.errors.internal_server_error, res, err, this.errors.error);
        }
    }

    createProduct = async (req: Request, res: Response) => {
        try {
            const { body } = req;
            const product = await this.productService.createProduct(body);
            const tags = await this.productTagService.createProductTag(body.tags, product._id);

            await this.priceRecordService.createPriceRecord(product);
            await this.stockRecordService.createStockRecord(product);

            statusResponse(201, this.success.message, res, { product, tags }, this.success.success);
        } catch (err: any) {
            this.logger.error("setTags@ProductController " + JSON.stringify(err) + err);
            statusResponse(500, this.errors.internal_server_error, res, err, this.errors.error);
        }
    }

    updateProduct = async (req: Request, res: Response) => {
        try {
            const { body, params: { id } } = req;
            const product = await this.productService.updateProduct(id, body);
            await this.productTagService.deleteProductTag(id);
            const tags = await this.productTagService.createProductTag(body.tags, id);

            if (body.price) { await this.priceRecordService.createPriceRecord(product!); }
            if (body.stock) { await this.stockRecordService.createStockRecord(product!); }
            statusResponse(201, this.success.message, res, { product, tags }, this.success.success);
        } catch (err: any) {
            this.logger.error("setTags@ProductController " + JSON.stringify(err) + err);
            statusResponse(500, this.errors.internal_server_error, res, err, this.errors.error);
        }
    }

    deleteProduct = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const product = await this.productService.deleteProduct(id);
            const tags = await this.productTagService.deleteProductTag(id);

            statusResponse(201, this.success.message, res, { product, tags }, this.success.success);
        } catch (err: any) {
            this.logger.error("setTags@ProductController " + JSON.stringify(err) + err);
            statusResponse(500, this.errors.internal_server_error, res, err, this.errors.error);
        }
    }
};
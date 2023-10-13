import { Request, Response } from "express";
import { ProductService, PriceRecordService, StockRecordService, ProductTagService } from "../services";
import BaseController from "./baseController";

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
            res.status(200).json({
                status: this.success.success,
                message: this.success.message,
                products
            })
        } catch (err: any) {
            this.logger.error("setTags@ProductController " + JSON.stringify(err) + err);
            res.status(500).json({
                status: this.errors.error,
                message: this.errors.internal_server_error,
                response: err
            });
        }
    }

    getProductById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const product = await this.productService.getProductById(id);
            const tags = await this.productTagService.getProductTagByProductId(id);
            res.status(200).json({
                status: this.success.success,
                message: this.success.message,
                product: { product, tags }
            })
        } catch (err: any) {
            this.logger.error("setTags@ProductController " + JSON.stringify(err) + err);
            res.status(500).json({
                status: this.errors.error,
                message: this.errors.internal_server_error,
                response: err
            });
        }
    }

    createProduct = async (req: Request, res: Response) => {
        try {
            const { body } = req;
            const product = await this.productService.createProduct(body);
            const tags = await this.productTagService.createProductTag(body.tags, product._id);

            await this.priceRecordService.createPriceRecord(product);
            await this.stockRecordService.createStockRecord(product);

            res.status(201).json({
                status: this.success.success,
                message: this.success.message,
                product: { product, tags }
            })
        } catch (err: any) {
            this.logger.error("setTags@ProductController " + JSON.stringify(err) + err);
            res.status(500).json({
                status: this.errors.error,
                message: this.errors.internal_server_error,
                response: err
            });
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
            res.status(201).json({
                status: this.success.success,
                message: this.success.message,
                product: { product, tags }
            })
        } catch (err: any) {
            this.logger.error("setTags@ProductController " + JSON.stringify(err) + err);
            res.status(500).json({
                status: this.errors.error,
                message: this.errors.internal_server_error,
                response: err
            });
        }
    }

    deleteProduct = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const product = await this.productService.deleteProduct(id);
            const tags = await this.productTagService.deleteProductTag(id);

            res.status(200).json({
                status: this.success.success,
                message: this.success.message,
                product: { product, tags }
            })
        } catch (err: any) {
            this.logger.error("setTags@ProductController " + JSON.stringify(err) + err);
            res.status(500).json({
                status: this.errors.error,
                message: this.errors.internal_server_error,
                response: err
            });
        }
    }
};
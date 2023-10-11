import { Request, Response, Router } from "express";
import { ProductController } from "../controllers";

const productRoutes = Router();
const productController = new ProductController();

productRoutes.get('/getAll', productController.getProducts);

export default productRoutes;
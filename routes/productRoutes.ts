import { Router } from "express";
import { ProductController } from "../controllers";
import ModelValidator from "../middlewares/modelValidator";

const productRoutes = Router();
const productController = new ProductController();
const productValidator = new ModelValidator();

productRoutes.get('/getAll', productController.getProducts);
productRoutes.get('/:id', productController.getProductById);
productRoutes.post('/create', productValidator.product, productController.createProduct);
productRoutes.put('/:id', productController.updateProduct);
productRoutes.delete('/:id', productController.deleteProduct);

export default productRoutes;
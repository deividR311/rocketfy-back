import { Schema, model } from 'mongoose';
import { Product } from '../interfaces';

const ProductSchema = new Schema<Product>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    sku: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const ProductModel = model('Product', ProductSchema);
export default ProductModel;
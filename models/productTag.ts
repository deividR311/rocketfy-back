import { Schema, model } from 'mongoose';
import { ProductTag } from '../interfaces';

const ProductTagSchema = new Schema<ProductTag>({
    productId: { type: Schema.Types.ObjectId, ref: 'Product' },
    tagId: { type: Schema.Types.ObjectId, ref: 'Tag' }
}, { timestamps: { createdAt: 'created_at' } });

const ProductTagModel = model('ProductTag', ProductTagSchema);
export default ProductTagModel;
import { Schema, model } from 'mongoose';
import { PriceRecord } from '../interfaces';

const PriceRecordSchema = new Schema<PriceRecord>({
    productId: { type: Schema.Types.ObjectId, ref: 'Product' },
    price: { type: Number, required: true }
}, { timestamps: { createdAt: 'created_at' } });

const PriceRecordModel = model('PriceRecord', PriceRecordSchema);
export default PriceRecordModel;
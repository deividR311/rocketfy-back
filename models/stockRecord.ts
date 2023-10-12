import { Schema, model } from 'mongoose';
import { StockRecord } from '../interfaces';

const StockRecordSchema = new Schema<StockRecord>({
    productId: { type: String, required: true },
    stock: { type: Number, required: true }
}, { timestamps: { createdAt: 'created_at' } });

const StockRecordModel = model('StockRecord', StockRecordSchema);
export default StockRecordModel;
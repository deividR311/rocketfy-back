import { Schema, model } from 'mongoose';
import { Tag } from '../interfaces';

const TagSchema = new Schema<Tag>({
    name: { type: String, required: true }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const TagModel = model('Tag', TagSchema);
export default TagModel;
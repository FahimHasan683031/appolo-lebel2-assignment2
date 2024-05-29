import { Schema, model } from 'mongoose';
import { inventory, product, variants } from './product.interface';

const variantsSchema = new Schema<variants>({
  type: {
    required: true,
    type: String,
  },
  value: {
    type: String,
    required: true,
  },
});

const inventorySchema = new Schema<inventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

const productSchema = new Schema<product>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  variants: [variantsSchema],
  inventory: inventorySchema,
});

export const productModel = model<product>('product', productSchema);

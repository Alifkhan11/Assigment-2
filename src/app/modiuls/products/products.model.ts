import { Schema, model } from 'mongoose';
import {
  TProductData,
  TProductInventory,
  TProductVariant,
} from './products.interfach';

const productsVarientSchema = new Schema<TProductVariant>({
  type: {
    type: String,
    required: [true, 'name is require'],
  },
  value: {
    type: String,
    required: [true, 'name is require'],
  },
});

const productInventorySchema = new Schema<TProductInventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

const productDataSchem = new Schema<TProductData>({
  name: {
    type: String,
    required: [true, 'name is require'],
  },
  description: {
    type: String,
    required: [true, 'discription is require'],
  },
  price: {
    type: Number,
    required: [true, 'name is require'],
  },
  category: {
    type: String,
    required: [true, 'name is require'],
  },
  tags: {
    type: [String],
    required: [true, 'name is require'],
  },
  variants: [productsVarientSchema],
  inventory: productInventorySchema,
});

export const Product = model<TProductData>('All-Products', productDataSchem);

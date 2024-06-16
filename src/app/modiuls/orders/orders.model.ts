import { Schema, model } from 'mongoose';
import { TProductsOrder } from './orders.interfach';

const orderDataSchema = new Schema<TProductsOrder>({
  email: {
    type: String,
    required: [true, 'email is require'],
  },
  productId: {
    type: String,
    required: [true, 'ProductsID is require'],
  },
  price: {
    type: Number,
    required: [true, 'Price is require'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quebtity is require'],
  },
});

export const Order = model<TProductsOrder>('Order-Data', orderDataSchema);

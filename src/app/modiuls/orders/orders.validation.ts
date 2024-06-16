import { z } from 'zod';

export const OrderSchemaValidation = z.object({
  email: z.string().email('Invalid email format'),
  productId: z.string().nonempty('Product ID is required'),
  price: z
    .number()
    .positive('Price must be a positive number')
    .min(1, 'Price is required'),
  quantity: z
    .number()
    .int()
    .positive('Quantity must be a positive integer')
    .min(1, 'Quantity is required'),
});

export default OrderSchemaValidation;

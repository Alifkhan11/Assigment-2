import { z } from 'zod';

export const ProductVariantSchema = z.object({
  type: z.string(),
  value: z.string(),
});

export const ProductInventorySchema = z.object({
  quantity: z
    .number()
    .int()
    .nonnegative('Quantity must be a non-negative integer'),
  inStock: z.boolean(),
});

export const ProductDataSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().positive('Price must be a positive number'),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(ProductVariantSchema),
  inventory: ProductInventorySchema,
});

export default ProductDataSchema;

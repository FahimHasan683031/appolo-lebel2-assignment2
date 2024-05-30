import { z } from 'zod';

// Define the variants validation schema
const variantsValidationSchema = z.object({
  type: z.string({
    required_error: 'type is required',
    invalid_type_error: 'type must be a string',
  }),
  value: z.string({
    required_error: 'value is required',
    invalid_type_error: 'value must be a srting',
  }),
});

// Define the inventory validation schema
const inventoryValidationSchema = z.object({
  quantity: z
    .number()
    .min(0, { message: 'Quantity must be a non-negative number' }),
  inStock: z.boolean({ required_error: 'InStock is required' }),
});

// Define the product validation schema
const productValidationSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string',
  }),
  description: z.string({
    required_error: 'description is required',
    invalid_type_error: 'descripton must be a string',
  }),
  price: z
    .number({
      required_error: 'price is required',
      invalid_type_error: 'price must be a numbere',
    })
    .nonnegative({ message: 'Price must be a non-negative number' }),
  category: z.string({
    required_error: 'price is required',
    invalid_type_error: 'price must be a numbere',
  }),
  tags: z.array(
    z.string({
      required_error: 'tags is required',
      invalid_type_error: 'tags must be an array of string',
    }),
  ),
  variants: z.array(variantsValidationSchema),
  inventory: inventoryValidationSchema,
});

export default productValidationSchema;
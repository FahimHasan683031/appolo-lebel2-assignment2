import { z } from 'zod';

// Define the order validation schema
const orderValidationSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be a string',
    })
    .email({ message: 'Invalid email address' }),
  productId: z.string({
    required_error: 'productId is required',
    invalid_type_error: 'productId must be a string',
  }),
  price: z
    .number({
        required_error: 'price is required',
        invalid_type_error: 'price must be a number',
      })
    .nonnegative({ message: 'Price must be a pojative number' }),
  quantity: z
    .number({
        required_error: 'quantity is required',
        invalid_type_error: 'quantity must be a number',
      })
    .int({ message: 'quntity must be a intiger number' })
    .nonnegative({ message: 'Quantity must be a non-negative integer' })
});

export default orderValidationSchema;
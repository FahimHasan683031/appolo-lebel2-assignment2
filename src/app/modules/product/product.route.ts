import express from 'express';
import { productControllers } from './product.controller';

const router = express.Router();

router
  .get('/api/products', productControllers.getAllProducts)
  .get('/api/products/:productId', productControllers.getSingleProduct)
  .post('/api/products', productControllers.createProduct);

export const productRouter = router;

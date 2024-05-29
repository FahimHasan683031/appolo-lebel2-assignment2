import express from 'express';
import { productControllers } from './product.controller';

const router = express.Router();

router
  .get('/api/products', productControllers.getAllProducts)
  .get('/api/products/:productId', productControllers.getSingleProduct)
  .post('/api/products', productControllers.createProduct)
  .put('/api/products/:productId', productControllers.updateSingleProduct)
  .delete('/api/products/:productId', productControllers.deleteSingleProduct)

export const productRouter = router;

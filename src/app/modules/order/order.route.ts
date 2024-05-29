import express from 'express';
import { orderControllers } from './order.controller';

const router = express.Router();

router
  .get('/api/orders', orderControllers.getAllOrders)
  .get('/api/orders/:productId', orderControllers.getSingleOrder)
  .post('/api/orders', orderControllers.createOrder)
  .delete('/api/orders/:productId', orderControllers.deleteSingleOrder);
export const orderRouter = router;

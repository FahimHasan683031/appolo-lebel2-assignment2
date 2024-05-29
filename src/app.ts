import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productRouter } from './app/modules/product/product.route';
import { orderRouter } from './app/modules/order/order.route';
const app: Application = express();

app.use(express.json());
app.use(cors());
app.use('/', productRouter);
app.use('/', orderRouter);
app.get('/', (req: Request, res: Response) => {
  res.send('Server is running');
});

export default app;

import { Request, Response } from 'express';
import { orderServices } from './order.service';
import orderValidationSchema from './order.validation';


const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const zodValidationOrder = orderValidationSchema.parse(order)
    const result = await orderServices.createOrderIntoDB(zodValidationOrder);

    res.status(200).json({
      success: result.success,
      message: result.message,
      data: result?.data,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result:any = await orderServices.getAllOrdersFromDB(req.query);
    res.status(200).json({
      success: result.success,
      message: result.message,
      data: result.data,
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

const getSingleOrder = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const result = await orderServices.getSingleOrderFromDB(orderId);
    res.status(200).json({
      success: result.success,
      message: result.message,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

const deleteSingleOrder = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const result = await orderServices.deleteSingleOrderFromDB(orderId);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

export const orderControllers = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  deleteSingleOrder,
};

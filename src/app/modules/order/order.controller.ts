import { Request, Response } from 'express';
import { orderServices } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await orderServices.createOrderIntoDB(order);

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.getAllOrdersFromDB(req.query);
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

const getSingleOrder = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const result = await orderServices.getSingleOrderFromDB(orderId);
    res.status(200).json({
      success: true,
      message: 'order fetched successfully!',
      data: result,
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

import { order } from './order.interface';
import { orderModel } from './order.model';

const createOrderIntoDB = async (order: order) => {
  const product  = await orderModel.find({_id:order.productId})
  console.log(product);
  // const result = await orderModel.create(order);
  // return result;
};

const getAllOrdersFromDB = async (queryParams: any) => {
  const query: any = {};
  if (queryParams.email) {
    query.email = queryParams.email;
  }
  const result = await orderModel.find(query);
  return result;
};

const getSingleOrderFromDB = async (_id: string) => {
  const result = await orderModel.find({ _id });
  return result;
};

const deleteSingleOrderFromDB = async (_id: string) => {
  const result = await orderModel.deleteOne({ _id });
  return result;
};

export const orderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
  getSingleOrderFromDB,
  deleteSingleOrderFromDB,
};

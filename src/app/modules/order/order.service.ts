import { product } from '../product/product.interface';
import { productModel } from '../product/product.model';
import { order } from './order.interface';
import { orderModel } from './order.model';

const createOrderIntoDB = async (order: order) => {
  // find the ordered product form order collection
  const product: any = await productModel.findOne({ _id: order.productId });

  if (order.quantity === product.inventory.quantity) {
    // create order if order quntity and product quntaity both are equale
    const result = await orderModel.create(order);

    // update the ordered product enventory
    const newProduct = {
      inventory: {
        quantity: 0,
        inStock: false,
      },
    };
    const updateProduct = await productModel.findByIdAndUpdate(
      { _id: order.productId },
      newProduct,
      {
        new: true,
      },
    );

    return  {
      success: true,
      message: "Order created successfully!",
      data: result
  }
  } else if (order.quantity < product.inventory.quantity) {
    // create order if order quntity lesthen product quntaity
    const result = await orderModel.create(order);

    // update the ordered product enventory
    const newProduct = {
      $inc: { 'inventory.quantity': -order.quantity },
    };
    const updateProduct = await productModel.findByIdAndUpdate(
      { _id: order.productId },
      newProduct,
      {
        new: true,
      },
    );
    return {
      success: true,
      message: "Order created successfully!",
      data: result
  }
  } else {
    return {
      success: false,
      message: "Insufficient quantity available in inventory"
  }
  }
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

import { product } from './product.interface';
import { productModel } from './product.model';

const createProductIntoDB = async (product: product) => {
  const result = await productModel.create(product);
  return result;
};

const getAllProductsFromDB = async (queryParams: any) => {
  const query: any = {};
  if (queryParams.searchTerm) {
    query.name = new RegExp(queryParams.searchTerm, 'i');
  }
  const result = await productModel.find(query);
  return result;
};

const getSingleProductFromDB = async (_id: string) => {
  const result = await productModel.find({ _id });
  return result;
};

const updateSingleProductFromDB = async (_id: string, product: product) => {
  const result = await productModel.findByIdAndUpdate({ _id }, product, {
    new: true,
  });
  return result;
};

const deleteSingleProductFromDB = async (_id: string) => {
  const result = await productModel.deleteOne({ _id });
  return result;
};

export const productServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateSingleProductFromDB,
  deleteSingleProductFromDB,
};

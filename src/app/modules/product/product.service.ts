
import { queryParamsType, queryType } from '../custom.type';
import { product } from './product.interface';
import { productModel } from './product.model';

const createProductIntoDB = async (product: product) => {
  const result = await productModel.create(product);
  return result;
};

const getAllProductsFromDB = async (queryParams:queryParamsType) => {
  const query: queryType = {};
  if (queryParams.searchTerm) {
    query.name = new RegExp(queryParams.searchTerm, 'i');
  }
  const result = await productModel.find(query);
  if(queryParams.searchTerm){
    return {
      success: true,
      message: `Products matching search term ${queryParams.searchTerm} fetched successfully!`,
      data: result,
    };
  }else{
    return {
      success: true,
      message: `Products fetched successfully!`,
      data: result,
    };
  }
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

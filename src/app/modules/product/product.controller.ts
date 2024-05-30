import { Request, Response } from 'express';
import { productServices } from './product.service';
import productValidationSchema from './product.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const zodValidateData = productValidationSchema.parse(product)
    const result = await productServices.createProductIntoDB(zodValidateData);

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getAllProductsFromDB(req.query);
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

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.updateSingleProductFromDB(
      productId,
      req.body,
    );
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

const deleteSingleProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await productServices.deleteSingleProductFromDB(
          productId
        );
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

export const productControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct
};

import { Request, Response } from 'express';
import { productServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await productServices.createProductIntoDB(product);

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
    const result = await productServices.getAllProductsFromDB();
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

export const productControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { ProductService } from './products.service';
import ProductDataSchema from './products.validation';

//add products

const createProducts = async (req: Request, res: Response) => {
  try {
    // const resualt = await ProductService.createProductsFronDB(productsData);

    const zodParsedData = ProductDataSchema.parse(req.body);
    const resualt = await ProductService.createProductsFronDB(zodParsedData);

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: resualt,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Product created unsuccessfully!',
      data: error,
    });
  }
};

//get all Prosucts

const getProducts = async (req: Request, res: Response) => {
  try {
    const resualt = await ProductService.getProductsFromDB(req.query);

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: resualt,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Products fetched unsuccessfully!',
      data: error,
    });
  }
};

//get single products
const getoneProducts = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const resualt = await ProductService.getoneProductsFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: resualt,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Products fetched unsuccessfully!',
      data: error,
    });
  }
};

//updath products

const updathProducts = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const resualt = await ProductService.updathProductsFromDB(
      productId,
      req.body,
    );

    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: resualt,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Product updated unsuccessfully!',
      data: error,
    });
  }
};

//deleted products

const deletedProducts = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const resualt = await ProductService.deletedProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: resualt,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Product deleted unsuccessfully!',
      data: error,
    });
  }
};

export const ProductsController = {
  createProducts,
  getProducts,
  getoneProducts,
  updathProducts,
  deletedProducts,
};

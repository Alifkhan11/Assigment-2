import { Request, Response } from 'express';
import { ProductService } from './products.service';

//add products

const createProducts = async (req: Request, res: Response) => {
  try {
    const { Products: productsData } = req.body;
    const resualt = await ProductService.createProductsFronDB(productsData);

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
    const resualt = await ProductService.getProductsFromDB();

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
    const { Products: productsData } = req.body;

    const resualt = await ProductService.updathProductsFromDB(
      productId,
      productsData,
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

//search products

const searchProducts = async (req: Request, res: Response) => {
  try {
    const query = req.query.searchTerm as string;
    const resualt = await ProductService.searchProductsFromDB(query);

    res.status(200).json({
      success: true,
      message: 'Product searching successfully!',
      data: resualt,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Product searching unsuccessfully!',
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
  searchProducts,
};

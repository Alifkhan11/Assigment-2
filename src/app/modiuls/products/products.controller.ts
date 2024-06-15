import { Request, Response } from 'express';
import { ProductService } from './products.service';
//add products

const createProducts = async (req: Request, res: Response) => {
  try {
    const {Products:productsData} = req.body;
    const resualt = await ProductService.createProductsFronDB(productsData);

    res.status(200).json({
      success: true,
      message: 'Products Data is created succesfully',
      data: resualt,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Products Data is created unsuccesfully',
      data: error,
    });
  }
};

export const ProductsController = {
  createProducts,
};

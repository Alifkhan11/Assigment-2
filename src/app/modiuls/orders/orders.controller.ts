import { Request, Response, query } from 'express';
import { OrderService } from './orders.service';
import OrderSchemaValidation from './orders.validation';

//create data
const createOrderData = async (req: Request, res: Response) => {
  try {
    const { Orders: OrderData } = req.body;
    // const resualt = await OrderService.createOrderFronDB(OrderData);
    const zodParsedDatainOrder=OrderSchemaValidation.parse(OrderData)
    const resualt =await OrderService.createOrderFronDB(zodParsedDatainOrder)

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: resualt,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Order created unsuccessfully!',
      data: error,
    });
  }
};

//get data
const getOrderData = async (req: Request, res: Response) => {
  try {
    const resualt = await OrderService.getOrderFromDB();
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: resualt,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Orders fetched unsuccessfully!',
      data: error,
    });
  }
};

//search order data
const searchOrderData = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;

    const resualt = await OrderService.searchOrderFromDB(email);
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully for user email!',
      data: resualt,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Orders fetched unsuccessfully for user email!',
      data: error,
    });
  }
};

export const OrderController = {
  createOrderData,
  getOrderData,
  searchOrderData,
};

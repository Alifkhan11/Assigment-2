/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { OrderService } from './orders.service';
import OrderSchemaValidation from './orders.validation';

//create data
const createOrderData = async (req: Request, res: Response) => {
  try {
    // const resualt = await OrderService.createOrderFronDB(OrderData);
    const zodParsedDatainOrder = OrderSchemaValidation.parse(req.body);
    const resualt = await OrderService.createOrderFronDB(zodParsedDatainOrder);

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
    const resualt = await OrderService.getOrderFromDB(req.query);
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

export const OrderController = {
  createOrderData,
  getOrderData,
};

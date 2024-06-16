import e from 'express';
import { OrderController } from './orders.controller';

const router = e.Router();

router.post('/', OrderController.createOrderData);

router.get('/', OrderController.getOrderData);

router.get('/', OrderController.searchOrderData);

export const OrderRouther = router;

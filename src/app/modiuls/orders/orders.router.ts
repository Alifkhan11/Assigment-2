import e from 'express';
import { OrderController } from './orders.controller';

const router = e.Router();

router.post('/', OrderController.createOrderData);

router.get('/', OrderController.getOrderData);

export const OrderRouther = router;

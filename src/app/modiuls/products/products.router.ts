import e from 'express';
import { ProductsController } from './products.controller';

const router = e.Router();

router.post('/created', ProductsController.createProducts);

export const ProductsRought = router;

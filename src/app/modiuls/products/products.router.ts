import e from 'express';
import { ProductsController } from './products.controller';

const router = e.Router();

router.post('/', ProductsController.createProducts);

router.get('/',ProductsController.getProducts)

router.get('/:productId',ProductsController.getoneProducts)

export const ProductsRought = router;

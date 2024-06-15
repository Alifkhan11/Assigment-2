import e from 'express';
import { ProductsController } from './products.controller';

const router = e.Router();

router.post('/', ProductsController.createProducts);

router.get('/',ProductsController.getProducts)

router.get('/:productId',ProductsController.getoneProducts)

router.put('/:productId',ProductsController.updathProducts)

export const ProductsRought = router;

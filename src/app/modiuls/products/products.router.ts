import e from 'express';
import { ProductsController } from './products.controller';

const router = e.Router();

router.post('/', ProductsController.createProducts);

router.get('/', ProductsController.getProducts);

router.get('/:productId', ProductsController.getoneProducts);

router.put('/:productId', ProductsController.updathProducts);

router.delete('/:productId', ProductsController.deletedProducts);

router.get('/', ProductsController.searchProducts);

export const ProductsRought = router;

import { TProductData } from './products.interfach';
import { Product } from './products.model';

const createProductsFronDB = async (TProductsData: TProductData) => {
  const resualt = await Product.create(TProductsData);
  return resualt;
};

export const ProductService = {
  createProductsFronDB,
};

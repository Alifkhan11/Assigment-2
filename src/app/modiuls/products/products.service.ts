import { TProductData } from './products.interfach';
import { Product } from './products.model';

const createProductsFronDB = async (TProductsData: TProductData) => {
  const resualt = await Product.create(TProductsData);
  return resualt;
};

const getProductsFromDB = async () => {
  const resualt = await Product.find();
  return resualt;
};

const getoneProductsFromDB = async (_id: string) => {
  const resualt = await Product.findOne({ _id });
  return resualt;
};

const updathProductsFromDB = async (_id: string, updateData: any) => {
  const resualt = await Product.findByIdAndUpdate(_id, updateData, {
    new: true,
  });
  return resualt;
};

const deletedProductFromDB = async (_id: string) => {
  const resualt = await Product.deleteOne({ _id });
  return resualt;
};

const searchProductsFromDB = async (searchTerm: string) => {
  const resualt = await Product.find({ $text: { $search: searchTerm } });
  return resualt;
};

export const ProductService = {
  createProductsFronDB,
  getProductsFromDB,
  getoneProductsFromDB,
  updathProductsFromDB,
  deletedProductFromDB,
  searchProductsFromDB,
};

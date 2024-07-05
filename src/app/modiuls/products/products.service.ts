/* eslint-disable @typescript-eslint/no-explicit-any */
import { TProductData } from './products.interfach';
import { Product } from './products.model';

const createProductsFronDB = async (TProductsData: TProductData) => {
  const resualt = await Product.create(TProductsData);
  return resualt;
};

const getProductsFromDB = async (query: Record<string, unknown>) => {
  // const queryObj={...query}

  let searchTerm = '';

  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }

  const searchQuery = Product.find({
    $or: ['name', 'description'].map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  });

  // const resualt = await Product.find({ $text: { $search: searchTerm } });
  return searchQuery;
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

export const ProductService = {
  createProductsFronDB,
  getProductsFromDB,
  getoneProductsFromDB,
  updathProductsFromDB,
  deletedProductFromDB,
};

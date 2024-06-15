import { TProductData } from './products.interfach';
import { Product } from './products.model';

const createProductsFronDB = async (TProductsData: TProductData) => {
  const resualt = await Product.create(TProductsData);
  return resualt;
};


const getProductsFromDB=async()=>{
  const resualt = await Product.find()
  return resualt
}

const getoneProductsFromDB=async(_id:string)=>{
  const resualt = await Product.findOne({_id})
  return resualt
}

export const ProductService = {
  createProductsFronDB,
  getProductsFromDB,
  getoneProductsFromDB
};

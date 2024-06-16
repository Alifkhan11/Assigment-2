import { TProductsOrder } from "./orders.interfach";
import { Order } from "./orders.model";



const createOrderFronDB = async (TProductsOrder:TProductsOrder) => {
  const resualt = await Order.create(TProductsOrder);
  return resualt;
};

const getOrderFromDB=async()=>{
  const resualt=await Order.find()
  return resualt
}
const searchOrderFromDB=async(email:string)=>{
  const resualt=await Order.find({$text:{$search:email}})
  return resualt
}

export const OrderService={
    createOrderFronDB,
    getOrderFromDB,
    searchOrderFromDB
}
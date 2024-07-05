import { TProductsOrder } from './orders.interfach';
import { Order } from './orders.model';

const createOrderFronDB = async (TProductsOrder: TProductsOrder) => {
  const resualt = await Order.create(TProductsOrder);
  return resualt;
};

const getOrderFromDB = async (query: Record<string, unknown>) => {
  let email = '';

  if (query?.email) {
    email = query?.email as string;
  }

  const searchQuery = Order.find({
    $or: ['email'].map((field) => ({
      [field]: { $regex: email, $options: 'i' },
    })),
  });

  // const resualt = await Product.find({ $text: { $search: searchTerm } });
  return searchQuery;
};

export const OrderService = {
  createOrderFronDB,
  getOrderFromDB,
};

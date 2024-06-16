import express, { Application } from 'express';
import cors from 'cors';
import { ProductsRought } from './app/modiuls/products/products.router';
import { OrderRouther } from './app/modiuls/orders/orders.router';

const app: Application = express();

app.use(express.json());
app.use(cors());

//application rought
app.use('/api/products', ProductsRought);
app.use('/api/orders', OrderRouther);

app.get('/', (req, res) => {
  const a = 20;
  res.send('Hello World! 200300' + a);
});

export default app;

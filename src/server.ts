import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

const port = config.PORT;

async function main() {
  try {
    await mongoose.connect(config.DATABASE_URL as string);

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main();

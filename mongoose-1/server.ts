import express from "express";
import { connectToMongoDb } from "./products/connection/connection";
import productRouter from "./products/routes/products";
const PORT = 3000;
const createServer = async (): Promise<void> => {
  connectToMongoDb();
  const app = express();
  app.use(express.json());
  app.use("/products", productRouter);
  try {
    app.listen(PORT, () => {
      console.log(`Server running at port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

createServer();

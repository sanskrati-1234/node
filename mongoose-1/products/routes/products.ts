import express, { Router, Request, Response } from "express";
import { ProductData, ProductModel } from "../schema/Product";

const productRouter: Router = express.Router();

productRouter.get("/", async (req: Request, res: Response) => {
  try {
    const data = await ProductModel.find({ isActive: true });
    res.status(200).send({
      data: data,
      meta: { message: "Product added successfully" },
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).send({
      data: {},
      meta: { message: "Unable to take your request. Please try later" },
    });
  }
});

productRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { name, description }: ProductData = req.body;
    const product = new ProductModel({ name, description });
    const newProduct = await product.save();
    res.status(201).send({
      data: newProduct,
      meta: { message: "Product added successfully" },
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).send({
      data: {},
      meta: { message: "Unable to take your request. Please try later" },
    });
  }
});

export default productRouter;

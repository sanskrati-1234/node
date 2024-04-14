import mongoose, { Schema, Document } from "mongoose";

export interface ProductData {
  name: string;
  description: string;
  isActive: boolean;
}

interface P extends ProductData, Document {}

const ProductSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ProductModel = mongoose.model<P>("ProductsModel", ProductSchema);

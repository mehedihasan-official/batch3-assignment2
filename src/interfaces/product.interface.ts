import { Model } from "mongoose";

export type TVariant = {
  type: string;
  value: string;
};

export type TInventory = {
  quantity: number;
  inStock: boolean;
};

export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags?: string[];
  variations?: TVariant[];
  inventory: TInventory;
};

export interface IProductModel extends Model<TProduct> {
  isProductExist(name: string): Promise<TProduct | null>;
}

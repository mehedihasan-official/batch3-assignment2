import { Model } from "mongoose";

export type TVariant = {
    type: string;
    value: string;
};

export type TInventory = {
    quantity: number;
    inStoke: boolean;
};

export type Tproduct = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags?: string[];
    variations?: TVariant[];
    inventory: TInventory;
}

//for creating static:
export interface IProductModel extends Model<Tproduct> {
    isProductExist(name: string): Promise<Tproduct | null>;
}
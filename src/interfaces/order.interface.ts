import { Model, Types } from "mongoose";

export type TOrder = {
    email: string;
    productId: Types.ObjectId;
    price: number;
    quantity: number;
}

export interface IOrderModel extends Model<TOrder>{
    isOrderExist(name: string) : Promise<TOrder | null>
}
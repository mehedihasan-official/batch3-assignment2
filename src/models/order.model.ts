import { model, Model, Schema } from 'mongoose';
import { TOrder } from '../interfaces/order.interface';

//Order Schema
const orderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: [true, 'Customer email is required'],
      trim: true,
      lowercase: true,
    },

    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: [true, 'Product ID is required'],
    },

    price: {
      type: Number,
      required: [true, 'Order price is required'],
      min: [0, 'Price cannot be negative'],
    },

    quantity: {
      type: Number,
      required: [true, 'Order quantity is required'],
      min: [1, 'Quantity must be at least 1'],
    },
  },
  {
    timestamps: true,
  },
);

//Order Modern
export interface OrderModel extends Model<TOrder> {}

export const OrderData = model<TOrder, OrderModel>('Order', orderSchema);

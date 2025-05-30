import { TProduct } from "./product";

export type CartItem = {
  id: string;
  cartId: string;
  productId: string;
  quantity: number;
  product: TProduct
};

export type Cart = {
  id: string;
  userId: string;
  user: any;
  items: CartItem[]
  updatedAt: Date;
};

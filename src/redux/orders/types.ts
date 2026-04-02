import { CartItem } from "../cart/types";

export type OrderStatus = "pending" | "confirmed" | "shipped" | "cancelled";

export interface Order {
  id: string;
  createdAt: string;
  items: CartItem[];
  totalPrice: number;
  delivery: {
    name: string;
    phone: string;
    address: string;
    comment?: string;
  };
  status: OrderStatus;
}

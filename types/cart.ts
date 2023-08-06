import type { Key } from "react";
import { AssetType } from "./asset";

export type CartItemType = {
  id: Key;
  quantity: number;
  heroImage: AssetType;
  productName: string;
  price: number;
  salePrice?: number;
  size: string;
  color?: string;
};

export type Cart = {
  __typename?: "Cart";
  items?: CartItemType[];
  appliedCoupons?: string[]; // need to add type Coupon with price and name
  cartSubTotal?: number;
  discountAmount?: number;
  itemCount?: number;
  deliveryType?: {
    type: string;
    price: number;
  };
};

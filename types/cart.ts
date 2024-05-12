import type { Key } from "react";

export type CartItemType = {
  id?: Key;
  userId: String;
  quantity?: number;
  heroImageId: string;
  heroImageURL: string;
  productName: string;
  productId: string;
  price: number;
  salePrice?: number;
  size: string;
  color?: string;
};

export type CartType = {
  __typename?: "Cart";
  items?: CartItemType[];
  appliedCoupons?: string[]; // need to add type Coupon with price and name
  cartSubTotal?: number;
  discountAmount?: number;
  itemsCount?: number;
  userId?: string;
  deliveryType?: {
    type: string;
    price: number;
  };
};

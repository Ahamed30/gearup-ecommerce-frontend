export type CartItemType = {
  id: string;
  quantity: number;
  productImage: string;
  productName: string;
  price: number;
  salePrice: number;
  size: number;
};

export type Cart = {
  __typename?: "Cart";
  items?: CartItemType[];
  appliedCoupons?: string[]; // need to add type Coupon with price and name
  cartSubTotal?: number;
  discountAmount?: number;
  itemCount?: number;
};

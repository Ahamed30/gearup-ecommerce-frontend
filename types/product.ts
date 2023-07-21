import type { Key } from "react";
import { AssetType } from "./asset";

export interface ProductType {
  id: Key;
  productName: string;
  productDescription?: string;
  price: number;
  salePrice?: number;
  size?: string[];
  newProduct?: boolean;
  offerPercent?: string;
  heroImage: AssetType;
  productImages: AssetType[];
  color?: string;
}

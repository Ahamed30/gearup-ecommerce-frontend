import type { Key } from "react";
import { AssetType } from "./asset";

export interface ProductType {
  id: Key;
  productName: string;
  productDescription?: string;
  price: number;
  salePrice?: number;
  allSizes?: SizeWithInventory[];
  newProduct?: boolean;
  offerPercent?: string;
  heroImage: AssetType;
  productImages: AssetType[];
  color?: string;
  inStock?: false;
}

export interface SizeWithInventory {
  size: string;
  inventoryCount: number;
}

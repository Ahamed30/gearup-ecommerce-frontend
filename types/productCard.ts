import type { Key } from "react";
import { AssetType } from "./asset";

export interface ProductCardType {
  id?: Key;
  productName?: String;
  price?: String;
  salePrice?: String;
  newProduct?: Boolean;
  offerPercent?: String;
  productImages?: AssetType[];
}

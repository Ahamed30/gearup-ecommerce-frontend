import { Key } from "react";
import { AssetType } from "./asset";

export interface ProductCardType {
  id?: Key;
  productName?: String;
  price?: String;
  newProduct?: Boolean;
  offerPercent?: String;
  productImages?: Array<AssetType>;
}

import { AssetType } from "./asset";

export interface ProductType {
  productName?: String;
  productDescription?: String;
  price?: String;
  salePrice?: String;
  size?: string[];
  newProduct?: Boolean;
  offerPercent?: String;
  productImages: AssetType[];
}

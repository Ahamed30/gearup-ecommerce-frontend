import { Key } from "react";
import { ProductCardType } from "./productCard";

export interface ProductGridType {
  id?: Key;
  name?: String;
  products?: ProductCardType[];
}

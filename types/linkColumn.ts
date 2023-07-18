import { Key } from "react";
import { LinkType } from "./link";

export interface LinkColumnType {
  id?: Key;
  title?: String;
  links: LinkType[];
}

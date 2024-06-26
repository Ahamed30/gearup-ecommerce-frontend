import type { Key } from "react";
import { LinkType } from "./link";

export interface HeaderType {
  id?: Key;
  name?: String;
  navLinks?: LinkType[];
}

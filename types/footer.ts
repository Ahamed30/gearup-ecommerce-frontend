import type { Key } from "react";
import { LinkColumnType } from "./linkColumn";
import { SubscribeFormType } from "./subscribeForm";

export interface FooterType {
  id?: Key;
  subscribeForm?: SubscribeFormType;
  leftColumnTitle?: String;
  leftColumnDescription?: String;
  linkColumns?: LinkColumnType[];
  socialIcons?: String[];
}

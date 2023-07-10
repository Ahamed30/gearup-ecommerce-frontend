import { Key } from "react";
import { LinkColumnType } from "./linkColumn";
import { SubscribeFormType } from "./subscribeForm";
import { AssetType } from "./asset";

export interface FooterType {
  id?: Key;
  subscribeForm?: SubscribeFormType;
  leftColumnTitle?: String;
  leftColumnDescription?: String;
  linkColumns?: Array<LinkColumnType>;
  socialIcons?: Array<AssetType>;
}

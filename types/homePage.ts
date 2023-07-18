import { Key } from "react";

interface ComponentType {
  id: Key;
  __typename?: String;
}

export interface HomePageType {
  id?: Key;
  components?: ComponentType[];
}

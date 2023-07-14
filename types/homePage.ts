import { Key } from "react";

interface ComponentType {
  id: Key;
  name?: String;
}

export interface HomePageType {
  id?: Key;
  components?: Array<ComponentType>;
}

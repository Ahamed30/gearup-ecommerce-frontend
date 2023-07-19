import type { ReactNode } from "react";
import { CartContextProvider } from "./CartContext";

interface ProviderProps {
  children: ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  return <CartContextProvider>{children}</CartContextProvider>;
};

"use client";

import type { ReactNode } from "react";
import { CartContextProvider } from "./CartContext";
import { UserContextProvider } from "./UserContext";

interface ProviderProps {
  children: ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  return (
    <UserContextProvider>
      <CartContextProvider>{children}</CartContextProvider>
    </UserContextProvider>
  );
};

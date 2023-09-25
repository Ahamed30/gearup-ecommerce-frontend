"use client";

import type { ReactNode } from "react";
import { CartContextProvider } from "./CartContext";
import { UserContextProvider } from "./UserContext";
import { AppContextProvider } from "./AppContext";

interface ProviderProps {
  children: ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  return (
    <AppContextProvider>
      <UserContextProvider>
        <CartContextProvider>{children}</CartContextProvider>
      </UserContextProvider>
    </AppContextProvider>
  );
};

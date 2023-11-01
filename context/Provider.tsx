"use client";

import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";
import { AppContextProvider } from "./AppContext";
import { CartContextProvider } from "./CartContext";
import { UserContextProvider } from "./UserContext";

interface ProviderProps {
  children: ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  return (
    <SessionProvider>
      <AppContextProvider>
        <UserContextProvider>
          <CartContextProvider>{children}</CartContextProvider>
        </UserContextProvider>
      </AppContextProvider>
    </SessionProvider>
  );
};

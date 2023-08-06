// __mocks__/useCart.ts
import { createContext, useContext } from "react";

// Create a mock cart context with a default value of null (no cart data).
const CartContext = createContext(null);

// Create a custom hook to access the mock cart context.
export const useCart = () => {
  const cart = useContext(CartContext);
  if (cart === null) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return cart;
};

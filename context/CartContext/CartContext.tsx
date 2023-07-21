import { Cart, CartItemType } from "@/types";
import { createContext, useContext, type ReactNode, useState } from "react";

interface CartContextType {
  addToCart: (item: CartItemType) => void; // when updating via backend these can be update to Promise<void> from void
  cart: Cart | null;
  // clearCartAlertState: () => void;
  removeFromCart: (itemId: string) => void;
  updateCartItem: (itemId: string, updatedItem: CartItemType) => void;
}

//@ts-expect-error: ignore initial context creation
const CartContext = createContext<CartContextType>(null);

export const useCart = () => useContext(CartContext);

export interface CartContextProviderProps {
  cart?: Cart | null;
  children: ReactNode;
}

export const CartContextProvider = ({
  cart: initialCart = null,
  children,
}: CartContextProviderProps) => {
  const [cart, setCart] = useState(initialCart);

  const addToCart = (item: CartItemType) => {
    if (cart?.items) {
      cart.items.forEach((element) => {
        if (element.id === item.id && element.size === item.size) {
          element.quantity += 1;
        }
      });
    }
    setCart((prevCart) => {
      const updatedCart: Cart = { ...prevCart };

      updatedCart.items = [...(prevCart?.items || []), item];

      return updatedCart;
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => {
      const updatedCart: Cart = { ...prevCart };

      updatedCart.items = updatedCart.items?.filter(
        (item) => item.id !== itemId
      );

      return updatedCart;
    });
  };

  const updateCartItem = (itemId: string, updatedItem: CartItemType) => {
    setCart((prevCart) => {
      const updatedCart: Cart = { ...prevCart };

      updatedCart.items = updatedCart.items?.map((item) =>
        item.id === itemId ? updatedItem : item
      );

      return updatedCart;
    });
  };
  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        updateCartItem,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

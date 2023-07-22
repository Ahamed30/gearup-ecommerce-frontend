import { createContext, useContext, useState } from "react";
import type { ReactNode, Key } from "react";
import { Cart, CartItemType } from "@/types";
import { getCookie, setCookie } from "@/utils/cookie";

interface CartContextType {
  addToCart: (item: CartItemType) => void; // when updating via backend these can be update to Promise<void> from void
  cart: Cart | null;
  // clearCartAlertState: () => void;
  removeFromCart: (itemId: Key, size: string) => void;
  updateCartItem: (itemId: string, updatedItem: CartItemType) => void;
  updateCart: (cart: Cart) => void;
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
  const cartFromCookie: Cart | null = getCookie("cart");
  // console.log("...", cartFromCookie);
  const [cart, setCart] = useState(initialCart ?? cartFromCookie);

  const addToCart = (item: CartItemType) => {
    let isItemExists = false;
    if (cart?.items) {
      cart.items.forEach((element) => {
        if (element.id === item.id && element.size === item.size) {
          cart.cartSubTotal =
            (cart.cartSubTotal ?? 0) + (item?.salePrice ?? item.price);
          element.quantity += 1;
          isItemExists = true;
          setCookie("cart", cart);
          return;
        }
      });
    }
    if (isItemExists) return;
    setCart((prevCart) => {
      const updatedCart: Cart = { ...prevCart };

      updatedCart.items = [...(prevCart?.items || []), item];
      updatedCart.itemCount = (updatedCart.itemCount ?? 0) + 1;
      updatedCart.cartSubTotal =
        (updatedCart.cartSubTotal ?? 0) + (item?.salePrice ?? item.price);
      setCookie("cart", updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (itemId: Key, size: string) => {
    setCart((prevCart) => {
      const updatedCart: Cart = { ...prevCart };
      updatedCart.items = updatedCart.items?.filter((item) => {
        if (item.id === itemId && item.size === size) {
          updatedCart.cartSubTotal =
            (updatedCart.cartSubTotal ?? 0) -
            (item?.salePrice ?? item.price) * item.quantity;
          return false;
        }
        return true;
      });

      updatedCart.itemCount = (updatedCart.itemCount ?? 1) - 1;
      setCookie("cart", updatedCart);
      return updatedCart;
    });
    console.log("-->", cart);
  };

  const updateCartItem = (itemId: Key, updatedItem: CartItemType) => {
    setCart((prevCart) => {
      const updatedCart: Cart = { ...prevCart };

      updatedCart.items = updatedCart.items?.map((item) =>
        item.id === itemId ? updatedItem : item
      );
      setCookie("cart", updatedCart);
      return updatedCart;
    });
  };

  const updateCart = (cart: Cart) => {
    setCart(cart);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        updateCartItem,
        updateCart,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

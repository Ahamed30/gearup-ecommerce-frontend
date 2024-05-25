import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode, Key, Dispatch, SetStateAction } from "react";
import { CartType, CartItemType } from "@/types";
import { getCookie, removeCookie, setCookie } from "@/utils/cookie";
import { handlefetchOperation } from "@/utils/handlefetchOperation";
import { useApp } from "../AppContext";
import { useUser } from "../UserContext";

export interface CartContextType {
  addToCart: (item: CartItemType) => void; // when updating via backend these can be update to Promise<void> from void
  cart: CartType | null;
  // clearCartAlertState: () => void;
  removeFromCart: (itemId: Key, size: string) => void;
  updateCartItem: (itemId: string, updatedItem: CartItemType) => void;
  updateCart: (cart: CartType) => void;
  emptyCart: () => void;
  order: CartType | null;
  setOrder: Dispatch<SetStateAction<CartType | null>>;
  setCart: Dispatch<SetStateAction<CartType | null>>;
}

//@ts-expect-error: ignore initial context creation
const CartContext = createContext<CartContextType>(null);

export const useCart = () => useContext(CartContext);

export interface CartContextProviderProps {
  cart?: CartType | null;
  children: ReactNode;
}

export const CartContextProvider = ({
  cart: initialCart = null,
  children,
}: CartContextProviderProps) => {
  const cartFromCookie: CartType | null = getCookie("cart");
  const [cart, setCart] = useState(initialCart ?? cartFromCookie);
  const [order, setOrder] = useState<CartType | null>(null);
  const { setIsLoading } = useApp();
  const { user, isLoggedIn } = useUser();

  useEffect(() => {
    if (isLoggedIn) {
      refreshCartData();
    }
    if (cart && !user?.email) {
      setCart(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  const refreshCartData = async () => {
    setIsLoading(true);
    if (getCookie("cart")) {
      const updatedCartItems = cart?.items?.map((item) => {
        return { ...item, userId: user?.email };
      });
      const cartData = await handlefetchOperation(
        `/cart/addAllItemsToCart`,
        "POST",
        updatedCartItems as unknown as BodyInit
      );
      removeCookie("cart");
      setCart(cartData);
      setIsLoading(false);
    } else {
      const cartData = await handlefetchOperation(
        `/cart?userId=${user?.email}`,
        "GET"
      );
      setCart(cartData);
    }
    setIsLoading(false);
  };

  const addToCartCookie = (item: CartItemType) => {
    let isItemExists = false;
    if (cart?.items) {
      cart.items.forEach((element) => {
        if (element.id === item.id && element.size === item.size) {
          cart.cartSubTotal =
            (cart.cartSubTotal ?? 0) + (item?.salePrice ?? item.price);
          element.quantity = element.quantity ?? 0 + 1;
          isItemExists = true;
          setCookie("cart", cart);
          return;
        }
      });
    }
    if (isItemExists) return;
    setCart((prevCart) => {
      const updatedCart: CartType = { ...prevCart };

      updatedCart.items = [...(prevCart?.items || []), item];
      updatedCart.itemsCount = (updatedCart.itemsCount ?? 0) + 1;
      updatedCart.cartSubTotal =
        (updatedCart.cartSubTotal ?? 0) + (item?.salePrice ?? item.price);
      setCookie("cart", updatedCart);
      return updatedCart;
    });
  };

  const addToCart = async (item: CartItemType) => {
    setIsLoading(true);
    if (user?.email) {
      const cartData = await handlefetchOperation(
        `/cart/addToCart`,
        "POST",
        item as unknown as BodyInit
      );
      setIsLoading(false);
      setCart(cartData);
      return cartData;
    }
    setIsLoading(false);
    return addToCartCookie(item);
  };

  const removeCartItemFromCookie = (itemId: Key, size: string) => {
    setCart((prevCart) => {
      const updatedCart: CartType = { ...prevCart };
      updatedCart.items = updatedCart.items?.filter((item) => {
        if (item.id === itemId && item.size === size) {
          updatedCart.cartSubTotal =
            (updatedCart.cartSubTotal ?? 0) -
            (item?.salePrice ?? item.price) * (item?.quantity ?? 0);
          return false;
        }
        return true;
      });

      updatedCart.itemsCount = (updatedCart.itemsCount ?? 1) - 1;
      setCookie("cart", updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = async (itemId: Key, size: string) => {
    if (user?.email) {
      const cartData = await handlefetchOperation(
        `/cart/removeItemFromCart?itemId=${itemId}`,
        "DELETE"
      );
      setIsLoading(false);
      setCart(cartData);
      return cartData;
    }
    removeCartItemFromCookie(itemId, size);
  };

  const updateCartItem = (itemId: Key, updatedItem: CartItemType) => {
    setCart((prevCart) => {
      const updatedCart: CartType = { ...prevCart };

      updatedCart.items = updatedCart.items?.map((item) =>
        item.id === itemId ? updatedItem : item
      );
      setCookie("cart", updatedCart);
      return updatedCart;
    });
  };

  const updateCart = (cart: CartType) => {
    setCart(cart);
    setCookie("cart", cart);
  };

  const emptyCart = () => {
    removeCookie("cart");
    setCart(null);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCartItem,
        updateCart,
        emptyCart,
        order,
        setOrder,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

import { createContext, ReactNode, useEffect, useState } from "react";
import { produce } from "immer";

export interface Product {
  id: string;
  name: string;
  price: string;
  brand: string;
  image: string;
  type: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  addProductToCart: (product: CartItem) => void;
  changeCartItemQuantity: (
    cartItemId: string,
    type: "increase" | "decrease"
  ) => void;
  removeCartItem: (cartItemId: string) => void;
  clearCart: () => void;
}

interface ContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function ContextProvider({ children }: ContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem("cart");
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }
    return [];
  });

  const cartQuantity = cartItems.length;

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + Number(cartItem.price) * cartItem.quantity;
  }, 0);

  function addProductToCart(product: CartItem) {
    const productAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === product.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (productAlreadyExistsInCart < 0) {
        draft.push(product);
        alert("Produto adicionado com sucesso!");
      } else {
        draft[productAlreadyExistsInCart].quantity += product.quantity;
        alert("Produto já foi adicionado");
      }
    });

    setCartItems(newCart);
  }

  // console.log("Temos os sequintes itens:", cartItems);

  function changeCartItemQuantity(
    cartItemId: string,
    type: "increase" | "decrease"
  ) {
    const newCart = produce(cartItems, (draft) => {
      const productExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (productExistsInCart >= 0) {
        const item = draft[productExistsInCart];
        draft[productExistsInCart].quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    });

    setCartItems(newCart);
  }

  function removeCartItem(cartItemId: string) {
    const newCart = produce(cartItems, (draft) => {
      const productExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (productExistsInCart >= 0) {
        draft.splice(productExistsInCart, 1);
      }
    });

    setCartItems(newCart);
  }

  function clearCart() {
    setCartItems([]);
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartItemsTotal,
        addProductToCart,
        changeCartItemQuantity,
        removeCartItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

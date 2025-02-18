'use client';

import { CartItem } from '@/types/cart';
import { Product } from '@/types/product';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface CartContext {
  items: CartItem[];
  updateCart: (product: Product, quantity: number) => void;
  removeFromCart: (product: Product) => void;
  countAllItems: () => number;
  countTotalPrice: () => number;
  clearCart: () => void;
}

const updateCartInLocalStorage = (items: CartItem[]) => {
  localStorage.setItem('cartItems', JSON.stringify(items));
};

const CartContext = createContext<CartContext>({
  items: [],
  updateCart: () => {},
  removeFromCart: () => {},
  countAllItems: () => 0,
  countTotalPrice: () => 0,
  clearCart: () => {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const updateCart = (product: Product, quantity: number) => {
    const existingItem = cartItems.find(
      (item) => item.product.id === product.id,
    );

    if (existingItem) {
      const updatedItems = cartItems.map((item) =>
        item.product.id === product.id
          ? {
              ...item,
              quantity: quantity,
            }
          : item,
      );
      setCartItems(updatedItems);
      updateCartInLocalStorage(updatedItems);
    } else {
      const updatedItems = [
        ...cartItems,
        {
          product,
          quantity,
        },
      ];
      setCartItems(updatedItems);
      updateCartInLocalStorage(updatedItems);
    }
  };

  const removeFromCart = (product: Product) => {
    const updatedItems = cartItems.filter(
      (item) => item.product.id !== product.id,
    );
    setCartItems(updatedItems);
    updateCartInLocalStorage(updatedItems);
  };

  const countAllItems = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };

  const countTotalPrice = () => {
    return cartItems.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0,
    );
  };

  const clearCart = () => {
    setCartItems([]);
    updateCartInLocalStorage([]);
  };

  useEffect(() => {
    const result = localStorage.getItem('cartItems');
    if (result !== null) {
      setCartItems(JSON.parse(result));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        updateCart,
        removeFromCart,
        countAllItems,
        countTotalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);

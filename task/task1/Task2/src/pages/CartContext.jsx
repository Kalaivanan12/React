import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add car to cart
  const addToCart = (car) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === car.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === car.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...car, qty: 1 }];
    });
  };

  // Remove car from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

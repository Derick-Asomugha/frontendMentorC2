// "use client";

// import { createContext, useContext, useState } from "react";

// interface CartProduct {
//   name: string;
//   price: number;
//   image?: string;
//   amount: number;
// }

// interface CartContextType {
//   cart: CartProduct[];
//   addToCart: (item: CartProduct) => void;
//   removeFromCart: (name: string) => void;
//   increment: (name: string) => void;
//   decrement: (name: string) => void;
// }

// const CartContext = createContext<CartContextType | null>(null);

// export function CartProvider({ children }: { children: React.ReactNode }) {
//   const [cart, setCart] = useState<CartProduct[]>([]);

//   const addToCart = (item: CartProduct) => {
//     setCart((prev) => {
//       const exists = prev.find((p) => p.name === item.name);
//       if (exists) {
//         return prev.map((p) =>
//           p.name === item.name ? { ...p, amount: p.amount + 1 } : p
//         );
//       }
//       return [...prev, item];
//     });
//   };

//   const removeFromCart = (name: string) =>
//     setCart((prev) => prev.filter((item) => item.name !== name));

//   const increment = (name: string) =>
//     setCart((prev) =>
//       prev.map((item) =>
//         item.name === name ? { ...item, amount: item.amount + 1 } : item
//       )
//     );

//   const decrement = (name: string) =>
//     setCart((prev) =>
//       prev.map((item) =>
//         item.name === name && item.amount > 1
//           ? { ...item, amount: item.amount - 1 }
//           : item
//       )
//     );

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, increment, decrement }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   return useContext(CartContext)!;
// }
"use client";

import { createContext, useContext, useState } from "react";

export interface CartProduct {
  name: string;
  price: number;
  image?: string;
  amount: number;
}

interface CartContextType {
  cart: CartProduct[];
  addToCart: (item: CartProduct) => void;
  removeFromCart: (name: string) => void;
  increment: (name: string) => void;
  decrement: (name: string) => void;
  clearCart: () => void; // Added
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const addToCart = (item: CartProduct) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.name === item.name);
      if (exists) {
        return prev.map((p) =>
          p.name === item.name ? { ...p, amount: p.amount + 1 } : p
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (name: string) =>
    setCart((prev) => prev.filter((item) => item.name !== name));

  const increment = (name: string) =>
    setCart((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, amount: item.amount + 1 } : item
      )
    );

  const decrement = (name: string) =>
    setCart((prev) =>
      prev.map((item) =>
        item.name === name && item.amount > 1
          ? { ...item, amount: item.amount - 1 }
          : item
      )
    );

  const clearCart = () => setCart([]); // Clears entire cart

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increment, decrement, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext)!;
}

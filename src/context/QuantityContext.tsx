"use client";

import {
  Children,
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

type QuantityContextType = {
  quantity: number;
  cartQuantity: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
  resetCart: () => void;
  handleAddToCart: () => void;
};

const QuantityContext = createContext<QuantityContextType | undefined>(
  undefined
);

export const useQuantity = () => {
  const context = useContext(QuantityContext);
  if (!context)
    throw new Error("useQuantity must be used within Quantityprovider");
  return context;
};

export const QuantityProvider = ({ children }: { children: ReactNode }) => {
  const [quantity, setQuantity] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0); // Actual cart quantity

  const increase = () => setQuantity((quantity) => quantity + 1);
  const decrease = () => setQuantity((quantity) => quantity - 1);
  const reset = () => setQuantity(0);
  const resetCart = () => {
    setCartQuantity(0);
    setQuantity(0);
  };

  const handleAddToCart = () => {
    setCartQuantity(quantity);
  };

  return (
    <QuantityContext.Provider
      value={{
        quantity,
        increase,
        decrease,
        reset,
        resetCart,
        handleAddToCart,
        cartQuantity,
      }}
    >
      {children}
    </QuantityContext.Provider>
  );
};

import React from 'react'
import { createContext, useState } from "react";

// initialize new context for cart
// create custom hook to provide immediate usage of cart context value for other components to use
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {}
})

// provider responsible for creating and updating STATE, and persisting values to the children
export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = {isCartOpen, setIsCartOpen};
    return (
        // render children in the component so that any descendant can access the value from the provider
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}


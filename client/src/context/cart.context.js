import React from 'react';
import { createContext, useState } from 'react';

// helper function
const addCartItem = (cartItems, productToAdd) => {
  // find if cart items contains product to add
  const exsistingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // if found, return new cart item and increment quantity
  if (exsistingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // return new array with modified cart items/new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// initialize new context for cart
// create custom hook to provide immediate usage of cart context value for other components to use
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

// provider responsible for creating and updating STATE, and persisting values to the children
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };
  
  return (
    // render children in the component so that any descendant can access the value from the provider
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};

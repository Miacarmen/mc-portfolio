import React, { createContext, useState, useEffect } from 'react';

// Helper Functions
// Increase item qunatity
const increaseItemQty = (cartItems, productToAdd) => {
  // check if current cartItems contains the product to add
  const exsistingCartItem = cartItems.find(
    // compare each cartItem's id to product to add's id
    // return true or false
    (cartItem) => cartItem.id === productToAdd.id
  );
  // if found, return new array of cartItems
  if (exsistingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 } // if true, return new cart item and increment quantity
        : cartItem
    );
  }
  // return new array with modified cart items/new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decreaseItemQty = (cartItems, cartItemToRemove) => {
  // find existing cart item to remove
  const exsistingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  // check if qty is equal to 1, if true remove item from cart
  if (exsistingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  // else, return back cartItems with matching cart item with reduced qty
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

// initialize new context for cart
// create custom hook to provide immediate usage of cart context value for other components to use
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeCartItem: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0
});

// provider responsible for creating and updating STATE, and persisting values to the children
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  
  // Set cart item total
  useEffect(() => {
    const newCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCount);
  }, [cartItems]);

  // set cart total
  useEffect(() => {
    const newTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newTotal);
  }, [cartItems]);

  // add an item to cart
  const addItemToCart = (productToAdd) => {
    setCartItems(increaseItemQty(cartItems, productToAdd));
  };

  const removeCartItem = (cartItemToRemove) => {
    setCartItems(decreaseItemQty(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeCartItem,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal
  };

  return (
    // render children in the component so that any descendant can access the value from the provider
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};

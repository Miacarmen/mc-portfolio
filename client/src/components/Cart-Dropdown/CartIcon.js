import React, { useContext } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import '../Navbar/Navbar.css';

import { CartContext } from '../../utils/context/cartContext';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className='icon-container cursor-pointer ' onClick={toggleIsCartOpen}>
      <BiShoppingBag size={21} className='cart-icon ' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;

import React, { useContext } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import '../Navbar/Navbar.css';

import { CartContext } from '../../context/cart.context';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className='icon-container cursor-pointer' onClick={toggleIsCartOpen}>
      {/* <div class='dropdown dropdown-end'>
        <label tabindex='0'> */}
          <BiShoppingBag size={21} className='cart-icon' />
          <span className='item-count'>0</span>
        {/* </label>
        <div
          tabindex='0'
          class='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
        >
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
          <Link to='/cart'>
            <button className='btn btn-primary btn-sm'>View Cart</button>
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default CartIcon;

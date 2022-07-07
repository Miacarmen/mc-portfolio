import React, { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './checkout-styles.css';

const CheckoutItem = ({ cartItem }) => {
  const { title, desc, price, quantity, imageURL } = cartItem;

  const { clearItemFromCart } = useContext(CartContext);

  const clearItem = () => clearItemFromCart(cartItem);

  return (
    <div className='checkoutItemContainer'>
      <div className='imgContainer'>
        <img src={imageURL} alt={`${title}`} />
      </div>
      <span className='title'>{title}</span>
      <span className='desc'>{desc}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>${price}</span>

      <div className='deleteBtn font-extrabold cursor-pointer' onClick={clearItem}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;

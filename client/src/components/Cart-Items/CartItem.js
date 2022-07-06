import React from 'react'

import './cart-item-styles.css';

const CartItem = ({ cartItem }) => {
  const { title, imageURL, quantity, price } = cartItem;
  return (
    <div className='cartItemContainer'>
      <img className="cartImg rounded-xl" src={imageURL} alt={`${title}`} />
      <div className='itemDetails pb-3 pl-3'>
        <span className='name font-bold'>{title}</span>
        <span className='price'>${price}</span>
        <span className='qty'>qty: {quantity}</span>
      </div>
      
    </div>
  )
}

export default CartItem;
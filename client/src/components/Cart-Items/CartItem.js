import React from 'react'

const CartItem = ({ cartItem }) => {
  const { title, quantity, price } = cartItem;
  return (
    <div className=''>
      <h2>{title}</h2>
      <span className='justify-end'>${price}</span>
      <span>qty: {quantity}</span>
    </div>
  )
}

export default CartItem;
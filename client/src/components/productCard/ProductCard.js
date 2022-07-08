import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import { Card } from 'react-daisyui';

const ProductCard = ({ product }) => {
  const [buttonText, setButtonText] = useState('Add To Cart');

  const { id, title, imageURL, desc, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  
  const handleBtnChange = () => {
    addProductToCart();
    setButtonText('Added');
  }  

  return (
    <div>
      <Card
        className='card-title lg:card-side bg-base-100 shadow-xl mb-5'
        key={id}
      >
        <div className='card-body'>
          <img alt={`${title}`} src={imageURL}></img>
          <Card.Title>{title}</Card.Title>
          <p className='text-sm'>{desc}</p>
          <p className='text-sm'>$ {price}</p>
          <div className='card-actions justify-center'>
            <button
              className='btn btn-primary buyNow'
              onClick={handleBtnChange}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;

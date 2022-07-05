import React from 'react';
import { Card } from 'react-daisyui';

const ProductCard = ({ product }) => {
  const { id, title, imageURL, desc, price } = product;
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
              onClick={() => console.log('clicked')}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;

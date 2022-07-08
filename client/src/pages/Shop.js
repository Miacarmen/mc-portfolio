import React, { useContext } from 'react';
import { ProductsContext } from '../context/products.context';
// Components
import { Card } from 'react-daisyui';
import ScrollArrow from '../components/ScrollArrow';
import ProductCard from '../components/productCard/ProductCard';
// images
import img5 from '../images/Devils-Disco-Top.png';
import img6 from '../images/Devils-Disco-Bottom.png';


// TO-DO: When a user clicks add to cart,
// add item to cart,
// update number on cart icon,
// change button to say "added"

const Shop = () => {

  const {products} = useContext(ProductsContext);
 
  return (
    <div className='bg-base-200'>
      <h1 className='pt-5 text-3xl font-bold text-base-300 text-center'>
        Prints
      </h1>
      <div className='container max-w-screen-lg mx-auto pb-10 text-primary mt-7'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
         
        ))}

        <Card className='card lg:card-side bg-base-100 shadow-xl mb-5'>
          <div className='card-body'>
            <img alt="Devil's Disco" src={img5}></img>
            <Card.Title>The Devils Disco</Card.Title>
            <p>**Animation Under Construction</p>
            <p>Not for sale (yet)</p>
            <div className='card-actions justify-center'>
              <button className='btn btn-primary buyNow' disabled>
                Add to Cart
              </button>
            </div>
          </div>
        </Card>

        <Card className='card lg:card-side bg-base-100 shadow-xl mb-5'>
          <div className='card-body'>
            <img alt="Devil's Disco" src={img6}></img>
            <Card.Title>The Devils Disco</Card.Title>
            <p>**Animation Under Construction</p>
            <p>Not for sale (yet)</p>
            <div className='card-actions justify-center'>
              <button className='btn btn-primary buyNow' disabled>
                Add to Cart
              </button>
            </div>
          </div>
        </Card>

        <ScrollArrow />
      </div>
    </div>
  );
};

export default Shop;

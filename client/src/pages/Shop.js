import React, { useContext } from 'react';
import { ProductsContext } from '../context/products.context';

import { Card } from 'react-daisyui';
import img5 from '../images/Devils-Disco-Top.png';
import img6 from '../images/Devils-Disco-Bottom.png';
// import Nav from '../components/Navbar';
import ScrollArrow from '../components/ScrollArrow';
import DATA from '../productData.json';
// TO-DO: When a user clicks add to cart,
// add item to cart,
// update number on cart icon,
// change button to say "added"

const Prints = () => {
  const {products} = useContext(ProductsContext);
  // // const [addItem, setAddItem] = useState(printData);

  // // check if item in cart, if true, increase quantity by 1
  // // if false, create new cart item
  // const addToCart = () => {
    
  // };

  return (
    <div className='bg-base-200'>
      <h1 className='pt-5 text-3xl font-bold text-base-300 text-center'>
        Prints
      </h1>
      <div className='container max-w-screen-lg mx-auto pb-10 text-primary mt-7'>
        {products.map((print) => (
          <Card
            className='card-title lg:card-side bg-base-100 shadow-xl mb-5'
            key={print.id}
          >
            <div className='card-body'>
              <img alt={print.title} src={print.imageURL}></img>
              <Card.Title>{print.title}</Card.Title>
              <p className='text-sm'>{print.desc}</p>
              <p className='text-sm'>$ {print.price}</p>
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

export default Prints;

import React from 'react';
import { Card } from 'react-daisyui';
// Components
import Paginate from '../components/Paginate';
import ScrollArrow from '../components/ScrollArrow';
import ImgCarousel from '../components/Carousel/Carousel';

const Designs = () => {
  return (
    <div className='wrapper bg-base-200'>
      <div className='container max-w-screen-lg mx-auto pb-10 text-primary'>
        <h1 className='pt-5 pb-5 text-3xl font-bold text-base-300 text-center'>
          Graphic Design
        </h1>

        <Card className='card-title lg:card-side bg-base-100 shadow-xl mb-5'>
          <Card.Body>
            <Card.Title tag='h2'>Chubby Snacks</Card.Title>
            <p></p>
            <ImgCarousel />
          </Card.Body>
          
        </Card>

        <ScrollArrow />
        <Paginate />
      </div>
    </div>
  );
};

export default Designs;

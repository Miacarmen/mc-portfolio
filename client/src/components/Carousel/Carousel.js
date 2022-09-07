import React from 'react';

import { Card } from 'react-daisyui';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import cbData from '../../cbData.json';

const ImgCarousel = () => {

  return (
    <>
      <Card className='card-title lg:card-side bg-base-100 shadow-xl mb-5'>
        <Card.Body>
          <Card.Title tag='h2'>Chubby Snacks</Card.Title>
          {/* <p>{image.title}</p> */}
          <Carousel showArrows autoPlay stopOnHover>
            {cbData.map((data) => { 
            return (
            <div key={data.id}>
              <p>{data.title}</p>
              <img alt={`${data.title}`} src={data.imageURL} />
            </div>
            );
            })}
          </Carousel>
        </Card.Body>
      </Card>

    </>

  );
};

export default ImgCarousel;

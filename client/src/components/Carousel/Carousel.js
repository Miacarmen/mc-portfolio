import React from 'react';

import { Card } from 'react-daisyui';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.styles.css';
// Image Data
import cbData from '../../utils/data/chubbyData.json';
import convData from '../../utils/data/convData.json';
import narjData from '../../utils/data/narjData.json';

const ImgCarousel = () => {
  return (
    <div>
      <Card className='card-title lg:card-side bg-base-100 shadow-xl mb-5'>
        <p className='px-5 py-5'>Link to <a href='https://www.figma.com/proto/zFTV5D1KbmX7PrF1qsTmXA/Untitled?node-id=1%3A4&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A4' alt="figma prototype" className='text-neutral' target="blank">Emit Mobile App Figma Prototype</a>
        </p>
      </Card>
      <Card className='card-title lg:card-side bg-base-100 shadow-xl mb-5'>
        <Card.Body>
          <Card.Title tag='h2'>Chubby Snacks</Card.Title>
          {/* <p>{image.title}</p> */}
          <Carousel showArrows autoPlay stopOnHover swipeable dynamicHeight>
            {cbData.map((data) => {
              return (
                <div key={data.id}>
                  <p className='projectTitle'>{data.title}</p>
                  <img alt={`${data.title}`} src={data.imageURL} />
                </div>
              );
            })}
          </Carousel>
        </Card.Body>
      </Card>

      <Card className='card-title lg:card-side bg-base-100 shadow-xl mb-5'>
        <Card.Body>
          <Card.Title tag='h2'>Converlytics</Card.Title>
          <Carousel showArrows autoPlay stopOnHover dynamicHeight>
            {convData.map((data) => {
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

      <Card className='card-title lg:card-side bg-base-100 shadow-xl mb-5'>
        <Card.Body>
          <Card.Title tag='h2'>North American Restoritive Justice</Card.Title>

          <Carousel showArrows autoPlay stopOnHover dynamicHeight>
            {narjData.map((data) => {
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
    </div>
  );
};

export default ImgCarousel;

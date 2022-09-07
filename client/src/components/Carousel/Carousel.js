import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Images
import boxSpecs from '../../images/Display-Box-Specs.png';
import banner from '../../images/Chubby-Email-Banner.png';
import red1 from '../../images/Straw-Final-Package-01.jpg';
import red2 from '../../images/Red-Sun-Final-Packaging-02.jpg';
import blue1 from '../../images/Blue-Final-Packaging-05.jpg';
import blue2 from '../../images/Blue-Sun-Final-Packaging-04.jpg';
import cbLogo from '../../images/CB-Final-Logo.png';
import colors from '../../images/CB-Colors-Temp.png';
import hero from '../../images/CB-Hero.png';

const ImgCarousel = () => {
  return (
    <>
      {/* <p className='mt-7 font-bold text-2xl'>Chubby Snacks</p> */}
      <Carousel showArrows autoPlay stopOnHover>
        <div>
          <p>Product Packaging</p>
          <img alt='CPG' src={red1} />
        </div>
        <div>
          <p>Product Packaging</p>
          <img alt='CPG' src={blue1} />
        </div>
        <div>
          <p>Product Packaging</p>
          <img alt='CPG' src={red2} />
        </div>
        <div>
          <p>Product Packaging</p>
          <img alt='CPG' src={blue2} />
        </div>
        <div>
          <p>Retail Box Packaging Specs</p>
          <img alt='CPG Specs' src={boxSpecs} />
        </div>
        <div>
          <p>Color Palette</p>
          <img alt='Palette' src={colors} />
        </div>
        <div>
          <p>Website Hero Image</p>
          <img alt='Website Hero' src={hero} />
        </div>
        <div>
          <p>Email Campaign banner</p>
          <img alt='Email Banner' src={banner} />
        </div>
        <div>
          <p>Company Logo</p>
          <img alt='Logo' src={cbLogo} />
        </div>
        
      </Carousel>
    </>
  );
};

export default ImgCarousel;

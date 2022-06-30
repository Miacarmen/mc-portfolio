import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Hero, Button } from 'react-daisyui';

const Home = () => {
  return (
    <Hero>
      <Hero.Overlay className='min-h-screen bg-base-200' />
      <Hero.Content className='text-center'>
        <div className='max-w-md'>
          <h1 className='myName font-bold'>Mia Carmen</h1>
          <h2 className='mt-5 text-3xl'>
            Full Stack Web Developer. Graphic Designer. Illustrator.
            <br></br>
            Based in Los Angeles.
          </h2>
          <Link to='/portfolio'>
            <Button className='mt-5 btn bg-primary text-base-content hover:bg-primary-focus border-none'>
              Learn More
            </Button>
          </Link>
        </div>
      </Hero.Content>
    </Hero>
  );
};

export default Home;

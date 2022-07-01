import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-daisyui';
import ScrollArrow from '../components/ScrollArrow';
import p1 from '../images/GirlyNoteTaker.png';
import p2 from '../images/DayPlanner.png';
import p3 from '../images/MiseEnPlace.png';
import p4 from '../images/ab.png';

const Portfolio = () => {
  return (
    <div className='bg-base-200'>
      <div className='container max-w-screen-lg mx-auto pb-10 text-primary'>
        <h1 className='pt-5 text-3xl font-bold text-base-300 text-center'>
          Web Applications
        </h1>
        <Card>
          <h1 className='mt-7 font-bold text-2xl'>
            A Cute and Girly Notetaker
          </h1>
          <p>Take Notes with Express, but in a Cute Girly Way</p>
          <a
            href='https://github.com/Miacarmen/super_girly_note_taker'
            target='blank'
            className='text-secondary'
          >
            Link to Github
          </a>
          <a
            href='https://super-girly-notetaker.herokuapp.com/'
            target='blank'
            className='text-secondary'
          >
            Live Site Here
          </a>
          <img alt='Girly Note Taker' src={p1}></img>
        </Card>

        <Card>
          <h1 className='mt-7 font-bold text-2xl'>Adventure Book</h1>
          <p>Get Inspired, Plan Your Next Adventure</p>
          <a
            href='https://github.com/Miacarmen/adventure-book'
            target='blank'
            className='text-secondary'
          >
            Link to Github
          </a>
          <a
            href='https://book-adventure.herokuapp.com/'
            target='blank'
            className='text-secondary'
          >
            Live Site Here
          </a>
          <img alt='Adventure Book' src={p4}></img>
        </Card>

        <Card>
          <h1 className='mt-7 font-bold text-2xl'>Day Planner</h1>
          <p>Plan Your Day Using moment.js</p>
          <a
            href='https://github.com/Miacarmen/Day-Planner'
            target='blank'
            className='text-secondary'
          >
            Link to Github
          </a>
          <a
            href='https://miacarmen.github.io/Day-Planner/'
            target='blank'
            className='text-secondary'
          >
            Live Site Here
          </a>
          <img alt='Day Planner' src={p2}></img>
        </Card>
        <Card>
          <h1 className='mt-7 font-bold text-2xl'>Mise en Place</h1>
          <p>Time Management Software</p>
          <a
            href='https://github.com/Miacarmen/mise-en-place'
            target='blank'
            className='text-secondary'
          >
            Link to Github
          </a>
          <a
            href='https://mise-en-place-planner.herokuapp.com/'
            target='blank'
            className='text-secondary'
          >
            Live Site Here
          </a>
          <img alt='Mise en Place' src={p3}></img>
        </Card>

        <ScrollArrow />

        <div class='flex justify-center btn-group mt-8'>
          <Link to='/portfolio'>
            <button class='btn btn-base btn-active'>1</button>
          </Link>
          <Link to='/designs'>
            <button class='btn btn-base'>2</button>
          </Link>
          <button class='btn btn-base'>3</button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

import React from 'react';
// Components
import { Card } from 'react-daisyui';
import ScrollArrow from '../components/ScrollArrow';
import Paginate from '../components/Paginate';

import data from '../utils/data/webApps.json';

const Portfolio = () => {
  return (
    <div className='bg-base-200'>
      <div className='container max-w-screen-lg mx-auto pb-10 text-primary'>
        <h1 className='pt-5 text-3xl font-bold text-base-300 text-center'>
          Web Applications
        </h1>
        {data.map((app) => (
          <Card key={app.id}>
            <h1 className='mt-7 font-bold text-2xl'>{app.title}</h1>
            <p>{app.description}</p>
            <a href={app.siteLink} target='blank' className='text-neutral'>
              Live Site Here
            </a>
            <img alt='Aloha HVAC' src={app.imageURL}></img>
          </Card>
        ))}

        <ScrollArrow />

        <Paginate />
      </div>
    </div>
  );
};

export default Portfolio;

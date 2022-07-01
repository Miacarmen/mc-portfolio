import React from 'react';
import profileImg from '../images/HeadShot.jpg';
import img from '../images/pink.jpg';

const About = () => {
  return (
    <div className='bg-base-200'>
      <div className='hero min-h-screen bg-base-200 px-6 pb-12'>
        <div className='flex grid grid-cols-1 md:grid-cols-4 '>
          <div className='hero-content flex flex-col lg:flex-row col-span-3 justify-center'>
            <img
              alt='headshot'
              src={img}
              className='rounded-full'
              width='250px'
              height='250px'
            />

            <div>
              <h1 className='text-5xl font-bold'>About Me</h1>
              <p className='text-base-content font-bold pt-3'>
                My name is Mia Carmen. I'm a full stack web developer, graphic
                designer, and illustrator based in Los Angeles, CA. I've gained
                my skills through the Fashion Institute of Design and
                Merchandising in Los Angeles, General Assembly, CodeSmith, and
                UC Berkeley.
              </p>

              <p className='pt-3 pb-4'>
                Having always had a passion for art and design, I have found web
                developement to be the most rewarding way to combine my love for both
                design and tech, and create intuitive and dynamic user
                experiences from a fresh and unique perspective. My personal style is
                either super tacky girly, or dark and mischievous, but know how
                to find that refined happy middle. If you're looking for someone to help
                you step outside your comfort zone and create eyecatching
                content, I'm your gal.
              </p>
              <button className='btn btn-primary'>See my Work</button>
            </div>
          </div>

          <div className='flex flex-row mt-3'>
            <div className='card mx-auto w-96 bg-primary'>
              <div className='card-body'>
                <h2 className='card-title'>Skills</h2>
                <h3 className='font-bold '>Design:</h3>
                <ul className='grid grid-cols-2 gap-x-5 text-base-content list-outside font-semibold'>
                  <li>Adobe Photoshop</li>
                  <li>Adobe Illustrator</li>
                  <li>Adobe After Effects</li>
                  <li>Adobe Animate</li>
                  <li>Adobe InDesign</li>
                  <li>Adobe XD</li>
                  <li>Sketch</li>
                  <li>Procreate</li>
                  <li>Figma</li>
                </ul>
                <h3 className='font-bold pt-2'>Web Dev:</h3>
                <ul className='flex grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 md:gap-x-5 text-base-content list-outside font-semibold'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>TailwindCSS</li>
                  <li>MaterialUI</li>
                  <li>DaisyUI</li>
                  <li>Sass</li>
                  <li>Handlebars</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Javascript</li>
                  <li>JQuery</li>
                  <li>JSX</li>
                  <li>Node.JS</li>
                  <li>Express.js</li>
                  <li>AngularJS</li>
                  <li>AJAX</li>
                  <li>MySQL</li>
                  <li>Sequelize</li>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                  <li>PostgreSQL</li>
                  <li>Apollo</li>
                  <li>GraphQL</li>
                  <li>IndexedDB</li>
                  <li>APIs</li>
                  <li>MERN Stack</li>
                  <li>MVC</li>
                  <li>PWAs</li>
                  <li>OOP</li>
                  <li>Git</li>
                  <li>Github</li>
                  <li>Jest</li>
                  <li>WebPack</li>
                  <li>Babel</li>
                  <li>Solidity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

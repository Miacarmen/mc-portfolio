import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import img from '../../images/mail4.png';

const ContactForm = () => {
  const form =  useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_8p18qqr', 'template_v9cm6yf', e.target, 'IkePfpVYGM7-q3VeV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className='card bg-base-100 shadow-xl'>
      <div className='card-body items-center flex'>
        <div className='bg-base-200 rounded-full py-4 px-5 text-center '>
          <h2 className='card-title'>
            Let's Chat! Send Me an Email
            <img src={img} alt='email' className='w-12 h-12 ' />
          </h2>
        </div>
        <form className='pt-4' ref={form} onSubmit={sendEmail}>
          <div className='grid grid-cols-2 gap-4'>
            <div className='flex flex-col'>
              <label htmlFor='firstName'>First name</label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                placeholder='First Name'
                className='form-input px-3 py-2 rounded-md'
                required
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='lastName'>Last name</label>
              <input
                type='text'
                id='lastName'
                name='lastName'
                placeholder='Last Name'
                className='form-input px-3 py-2 rounded-md'
                required
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Email'
                className='form-input px-3 py-2 rounded-md'
                required
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='phone'>
                <div className='flex align-items'>
                  Phone
                  <span className='ml-auto opacity-75'>Optional</span>
                </div>
              </label>
              <input
                type='tel'
                id='phone'
                name='phone'
                placeholder='Phone'
                className='form-input px-3 py-2 rounded-md'
              />
            </div>
            <div className='flex flex-col col-span-2'>
              <label htmlFor='subject'>Subject</label>
              <input
                type='text'
                id='subject'
                name='subject'
                className='form-input px-3 py-2 rounded-md'
                required
              />
            </div>
            <div className='flex flex-col col-span-2'>
              <label htmlFor='message'>
                <div className='flex align-items'>
                  Message
                  <span className='ml-auto opacity-75'>
                    Max. 500 characters
                  </span>
                </div>
              </label>
              <textarea
                maxLength='500'
                rows='4'
                type='text'
                id='message'
                name='message'
                className='form-input px-3 py-2 rounded-md'
                required
              />
            </div>
          </div>
          <div className='flex justify-end py-4'>
            <button
              type='submit'
              value='submit'
              className='btn btn-primary hover:bg-secondary border-none'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

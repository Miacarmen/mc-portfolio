import React from 'react';
import ContactForm from '../components/ContactForm/contactForm';
// add notification for required fields
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address
// button says sent after click of submit

const Contact = () => {
  return (
    <div className='wrapper bg-base-200 flex justify-center items-center'>
      <div className='container max-w-screen-lg mx-auto pb-12'>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

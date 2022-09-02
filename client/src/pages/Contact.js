import React from 'react';
import ContactForm from '../components/ContactForm/contactForm';
// add notification for required fields
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address
// button says sent after click of submit

const Contact = () => {
  return (
    <>
    <ContactForm />
    </>
  );
};

export default Contact;

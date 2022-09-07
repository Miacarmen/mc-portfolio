import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css';

import Nav from './components/Navbar/Navbar';
import Foot from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Designs from './pages/Designs';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Cookies from './pages/CookiePolicy';
import Privacy from './pages/PrivacyPolicy';
import Terms from './pages/TermsOfUse';


export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <div className='wrapper'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/designs' element={<Designs />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/cookiepolicy' element={<Cookies />} />
            <Route path='/privacypolicy' element={<Privacy />} />
            <Route path='/termsofuse' element={<Terms />} />
            <Route path='*' element={<p>Page Not Found</p>} />
          </Routes>
        </div>
        <Foot />
      </Router>
    </>
  );
}

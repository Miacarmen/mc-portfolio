import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css';

import Nav from './components/Navbar';
import Foot from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Designs from './pages/Designs';
import Shop from './pages/Shop';
import Cart from './pages/Cart';

import data from './productData.json';

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
            <Route path='*' element={<p>Page Not Found</p>} />
          </Routes>
        </div>
        <Foot />
      </Router>
    </>
  );
}

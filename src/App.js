import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/work';
import Testimonials from './Components/Testimonials';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <div className='home-container container'>
        <Home />
        <About />
        <Work />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
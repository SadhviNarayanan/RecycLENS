import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Hero />
      {/* Move Features section up */}
      <Features />
      {/* Move Testimonials section up */}
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;

// src/components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-btn">
      <div className="hero-content">
        <h1>Our Plans to Make an IMPACT</h1>
        <p>We provide cutting-edge solutions for all your web development needs.</p>
        <div className="spacer"></div>
        <a href="#features" className="cta-btn">Explore Features</a>
      </div>
    </section>
  );
};

export default Hero;

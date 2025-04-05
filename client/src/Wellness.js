// src/pages/WellnessPage.js

import React from "react";
import "./Wellness.css";
import './App.css';
import carIcon from './car-icon.png'; // Ensure the path is correct


const WellnessPage = () => {
  return (
    <div className="wellness-page">
      <header className="header">
        <nav className="nav">
          <div className="logo">Wellness</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#values">Values</a></li>
            <li><a href="#sustainability">Sustainability</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero1">
        <div className="hero1-content">
          <h1>Achieving Wellness, One Step at a Time</h1>
          <p>Join us in our journey towards a healthier and more sustainable world.</p>
          <a href="#about" className="cta-button">Discover Our Values</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <h2>About Wellness</h2>
          <p>We believe wellness is more than just physical health. It's about balance, harmony, and connection with nature. Our mission is to inspire sustainable living practices for a better future.</p>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="values-section">
        <div className="values-container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <i className="fas fa-leaf"></i>
              <h3>Health</h3>
              <p>We promote mental and physical well-being through holistic approaches.</p>
            </div>
            <div className="value-item">
              <i className="fas fa-recycle"></i>
              <h3>Sustainability</h3>
              <p>We prioritize eco-friendly practices that nurture the planet.</p>
            </div>
            <div className="value-item">
              <i className="fas fa-heart"></i>
              <h3>Compassion</h3>
              <p>Our actions are driven by a deep respect for people and the environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="sustainability-section">
        <div className="sustainability-container">
          <h2>Commitment to Sustainability</h2>
          <p>We're committed to creating a positive impact by reducing waste, promoting clean energy, and encouraging responsible consumption. Together, we can make a difference!</p>
          <div className="sustainability-images">
            <img src={carIcon} alt="Eco-Friendly" />
            <img src={carIcon} alt="Sustainability Practices" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        
          <p>&copy; 2025 Wellness. All rights reserved.</p>
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          
        </div>
      </footer>
    </div>
  );
};

export default WellnessPage;

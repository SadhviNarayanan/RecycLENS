// src/components/Features.js
import React from 'react';
import './Features.css';
import carIcon from '../car-icon.png'; // Ensure the path is correct


const Features = () => {
  return (
    <section id="features" className="features">
      <div className="feature-container">
        <h2>Our Key Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <i className="fas fa-laptop-code"></i>
            <h3>Template1</h3>
            <p>TODO: This is example text. We should add to this.</p>
            <div className="feature-images">
                <img src={carIcon} alt="Eco-Friendly" />
            </div>
          </div>
          <div className="feature-item">
            <i className="fas fa-cloud"></i>
            <h3>Template1</h3>
            <p>TODO: This is example text. We should add to this.</p>
            <div className="feature-images">
                <img src={carIcon} alt="Eco-Friendly" />
            </div>
          </div>
          <div className="feature-item">
            <i className="fas fa-mobile-alt"></i>
            <h3>Template1</h3>
            <p>TODO: This is example text. We should add to this.</p>
            <div className="feature-images">
                <img src={carIcon} alt="Eco-Friendly" />
            </div>
          </div>
          <div className="feature-item">
            <i className="fas fa-cloud"></i>
            <h3>Template1</h3>
            <p>TODO: This is example text. We should add to this.</p>
            <div className="feature-images">
                <img src={carIcon} alt="Eco-Friendly" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Features;

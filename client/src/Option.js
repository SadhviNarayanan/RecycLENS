// src/components/Features.js
import React from 'react';
import './Option.css';
import carIcon from './car-icon.png'; // Ensure the path is correct


const Option = () => {
  return (
    <section id="options" className="options">
      <div className="options-container">
        <h2>Option1</h2>
        <div className="options-grid">
          <div className="options-item">
            <i className="fas fa-laptop-code"></i>
            <h3>Template1</h3>
            <p>TODO: This is example text. We should add to this.</p>
            <div className="options-images">
                <img src={carIcon} alt="Eco-Friendly" />
            </div>
          </div>
          <div className="options-item">
            <i className="fas fa-cloud"></i>
            <h3>Template1</h3>
            <p>TODO: This is example text. We should add to this.</p>
            <div className="options-images">
                <img src={carIcon} alt="Eco-Friendly" />
            </div>
          </div>
          <div className="options-item">
            <i className="fas fa-mobile-alt"></i>
            <h3>Template1</h3>
            <p>TODO: This is example text. We should add to this.</p>
            <div className="options-images">
                <img src={carIcon} alt="Eco-Friendly" />
            </div>
          </div>
          <div className="options-item">
            <i className="fas fa-cloud"></i>
            <h3>Template1</h3>
            <p>TODO: This is example text. We should add to this.</p>
            <div className="options-images">
                <img src={carIcon} alt="Eco-Friendly" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Option;

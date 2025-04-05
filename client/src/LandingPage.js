// src/pages/LandingPage.js

import React from "react";
import { useNavigate } from "react-router-dom";
import './App.css';
import "./LandingPage.css"; // Make sure the CSS file is created separately for LandingPage styles

const LandingPage = () => {
  const navigate = useNavigate(); // Initialize the history object for navigation

  const handleButtonClick = () => {
    navigate("/Home"); // Navigates to the home page
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Welcome to Our Amazing Website!</h1>
        <p>
          Explore our features and discover how we can help take your business
          to the next level.
        </p>
        <button className="cta-button" onClick={handleButtonClick}>Get Started</button>
      </div>
    </div>
  );
};

export default LandingPage;

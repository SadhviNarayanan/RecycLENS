import React from "react";
import "./Wellness.css";
import './App.css';
import carIcon from './car-icon.png'; // Ensure the path is correct
import backgroundVideo from './bknd-video.mp4';
import TrashGame from './TrashGame';

// Then in your JSX

const Wellness = () => {
  return (
    <div className="wellness-page">
      
      {/* Video Background */}
        {/* <div className="video-background">
        <video className="video" autoPlay muted loop>
        <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        </div> */}
        <section id="game-section" className="game-section">
  <TrashGame />
</section>



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
          <h1></h1>
          <p></p>
          <a href="#about" className="cta-button">Discover Our Values</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <h2>About RecycLens</h2>
          <p>We believe in climate change from the gut. It should start from your plate and be a community effort. Our mission is to be the link between you and your community and making a real climate impact.  </p>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="values-section">
        <div className="values-container">
          <h2>What We Offer</h2>
          <div className="values-grid">
            <div className="value-item">
              <i className="fas fa-leaf"></i>
              <h3>Trash Segregator</h3>
              <p>Confused about which bin to put what food in?  Using state of the art Multimodal models, we predict which recepticle to place your trash in. Just upload a picture.</p>
            </div>
            <div className="value-item">
              <i className="fas fa-recycle"></i>
              <h3>Dashboard</h3>
              <p>Want to tangibly see the impact of your efforts? Head to Dashboard for personalized tips, compare your progress with your community and gain badges!</p>
            </div>
            <div className="value-item">
              <i className="fas fa-heart"></i>
              <h3>Upcoming Events</h3>
              <p>Change starts with community. Find what events are near you and get involved! </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      {/* <section id="sustainability" className="sustainability-section">
        <div className="sustainability-container">
          <h2>Commitment to Sustainability</h2>
          <p>We're committed to creating a positive impact by reducing waste, promoting clean energy, and encouraging responsible consumption. Together, we can make a difference!</p>
          <div className="sustainability-images">
            <img src={carIcon} alt="Eco-Friendly" />
            <img src={carIcon} alt="Sustainability Practices" />
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="footer">
          <p>&copy; 2025 RecycLens. All rights reserved.</p>
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
      </footer>
    </div>
  );
};

export default Wellness;

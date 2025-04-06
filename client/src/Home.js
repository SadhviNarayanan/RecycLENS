import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">  
    
      <div className="map-container">
        <iframe
          title="Pomona Waste Bins"
          src="//www.arcgis.com/apps/Embed/index.html?webmap=d3b60d34beb143beb59d7688f9ffc8bf&extent=-117.7171,34.0958,-117.7091,34.0997&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          allowFullScreen
        ></iframe>
      </div> 
    </div>
  );
};

export default Home;

// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'; // Import the CSS file

const NavigationBar = () => {
  return (
    <div className="header">
      <img src="logo.png" alt="Logo" className="logo" />
      <div className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/recEvents">Recommended Events</Link>
        <Link to="/events">Events</Link>
        <Link to="/pastEvents">Past Events</Link>
        <Link to="/winners">Winners</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/ETHome">ETHome</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/LogIn">Log In</Link>
        <Link to="/createAccount">Create account</Link>
        
      </div>
    </div>
  );
};

export default NavigationBar;

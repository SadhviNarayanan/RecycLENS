import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Header.css';

const Header = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      // Fetch data from the backend when the component mounts
      fetchUpcomingData();
    }, []);
  
    const fetchUpcomingData = async () => {
      try {
        const response = await fetch('http://localhost:5001/get/register/data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const handleLogout = () => {
        navigate("../LogIn")
    };

  return (
    <header className="header1">
      <h1>Welcome, {data.name}!</h1>
      <button className="logout-btn1" onClick={handleLogout}>Logout</button>
    </header>
  );
};

export default Header;

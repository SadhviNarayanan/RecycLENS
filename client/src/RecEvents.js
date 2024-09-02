import React, { useState, useEffect } from 'react';
import './App.css';

function RecEvents() {
  

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
  
  
    try {
        const response1 = await fetch('http://localhost:5001/get/rec/upcoming/events');
        if (!response1.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response1.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }

      try {
        const response2 = await fetch('http://localhost:5001/get/rec/past/events');
        if (!response2.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response2.json();
        setData2(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  };


  return (
    <div>
      <div className="flex-container">
        <div className="rec-container">

            <h2 className='center'>Events you may like: </h2>
            <form onSubmit={handleSubmit}>
                <button type="submit" className="rec-button">
                    Refresh to find Recommended Events
                </button>
            </form>
            
            <h2>Upcoming Events you may like: </h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
            {data.map((item, index) => (
                <li key={index} className='container'>
                <div>Event Name: {item.name}</div>
                <div>Event Date: {item.date}</div>
                <div>Event Description: {item.description}</div>
                </li>
                ))}
            </ul>

            <h2>Past Events you may like: </h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
            {data2.map((item, index) => (
                <li key={index} className='container'>
                <div>Event Name: {item.name}</div>
                <div>Event Date: {item.date}</div>
                <div>Event Description: {item.description}</div>
                </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
}

export default RecEvents;

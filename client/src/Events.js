import React, { useState, useEffect } from 'react';
import './App.css';

function Events() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    description: ''
  });

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetchUpcomingData();
  }, []);

  const fetchUpcomingData = async () => {
    try {
      const response = await fetch('http://localhost:5001/get/upcoming/events');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetchPastData();
  }, []);

  const fetchPastData = async () => {
    try {
      const response2 = await fetch('http://localhost:5001/get/past/events');
      if (!response2.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response2.json();
      setData2(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

 
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
  
   
  
    // Clear form data
    setFormData({
      name: '',
      date: '',
      description: ''
    });
  
    // Optional: Send form data to server
    fetch('http://localhost:5001/event/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: formData })
    })
      .then(response => {
        if (response.ok) {
          console.log('Data sent successfully');
          window.location.reload();
        } else {
          console.error('Failed to send data');
        }
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
  };
  

  // Function to handle input change
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
      <div className="flex-container">
        <div className="login-container">
          <h2>Enter your Events:</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <label>
              Event Name:
              <input
                type="text"
                className="text-box1"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Event Date:
              <input
                type="date"
                name="date"
                value={formData.date}
                className='text-box2'
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Event Description:
              <textarea
                className="text-box3"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="login-container">
          <h2>Upcoming Events:</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {data.map((item, index) => (
                <li key={index} className='container'>
                <div>Event Name: {item.name}</div>
                <div>Event Date: {item.date}</div>
                <div>Event Description: {item.description}</div>
                </li>
                ))}
            </ul>

            <h2>Past Events:</h2>
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

export default Events;

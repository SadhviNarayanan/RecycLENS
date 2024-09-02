import React, { useState, useEffect } from 'react';
import './App.css'; // Import from App.css
import carIcon from './car-icon.png'; // Import the car icon image from the appropriate location

function ProgressBar({ width, label, color, height }) {
  // Calculate the position of the car icon based on the width of the progress bar
  const carPosition = width - 5; // Adjust the offset as needed

  return (
    <div className="progress-container" style={{ height: `${height}px` }}>
      <div
        className="progress-bar"
        style={{ width: `${width}%`, backgroundColor: color }}
      >
        
        {label}
        <img
          src={carIcon}
          alt="Car Icon"
          className="car-icon"
          style={{ left: `calc(${carPosition}% + 25px)` }} // Add 10px offset
        />
      </div>
    </div>
  );
}

function Leaderboard() {

  const [formData, setFormData] = useState({
    points: '',
  });

  const [data, setData] = useState([]);

  
  

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior


    fetch('http://localhost:5001/points/data', {
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
      // Clear form data
    setFormData({
      points: '',
    });
  };

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetchPointData();
  }, []);

  const fetchPointData = async () => {
    try {
      const response = await fetch('http://localhost:5001/get/point/data');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };


  const num = 80;
  const str = num.toString()
  return (
    <div>
      <br></br><br></br>
      <h2 className = 'leaderboard_text'>Leaderboard (me = yellow)</h2>
    <div className="Leaderboard">
      <br></br>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <ProgressBar width={data} label= {"ME  " + `${data}%`} color="#FFA726" height={40} /> <br></br>
      <ProgressBar width={50} label="50%" color="#E74C3C" height={40} /> <br></br>
      <ProgressBar width={75} label="75%" color="#FF7043" height={40} /> <br></br>
      <ProgressBar width={90} label="90%" color="#76C7C0" height={40} /> <br></br>
    </div>

    <div className="login-container3">
    <h2>Enter your Points:</h2>
    <form className="login-form" onSubmit={handleSubmit}>
      <label>
        Points:
        <input
          type="text"
          className="text-box1"
          name="points"
          value={formData.points}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Submit</button>
      
    </form>
    </div>
    </div>
  );
}

export default Leaderboard;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './App.css';

function LogIn({ setIsAuthenticated }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (!formData.username || !formData.password) {
      setError('Both username and password are required');
      clearErrorAfterTimeout();
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/login/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: formData })
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success){
          console.log('Log In Successful!');
          
          setIsAuthenticated(true);
          navigate('/home');
        }
        else{
          console.log('Invalid Login');
          setError(result.message);
          setIsAuthenticated(false);
          clearErrorAfterTimeout();
        }
        
      } else {
        console.error('Failed to send data');
        clearErrorAfterTimeout();
      }
    } catch (error) {
      console.error('Error sending data:', error);
    }

    // Clear form data
    setFormData({
      username: '',
      password: '',
    });
  };

  // Function to handle input change
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const clearErrorAfterTimeout = () => {
    setTimeout(() => {
      setError('');
    }, 1800); // Clear the error message after 10 seconds
  };

  return (
    <div>
      <div className="login-container2">
        <h2 className="text_center">Login:</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            placeholder="username"
            type="text"
            className="text-box4"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <br />
          <input
            placeholder="password"
            type="password" // It's better to use type="password" for password fields
            className="text-box4"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <br />
          {error && <p className="error">{error}</p>}
          <br></br>
          <button type="submit" className="login_button">Log In</button>
        </form>

        <aside className="aside">
          Don't have an account? <br />
          <a href="/createAccount">Create one!</a>
        </aside>
      </div>
    </div>
  );
}

export default LogIn;

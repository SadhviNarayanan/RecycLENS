import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './App.css';

function CreateAccount({ setIsAuthenticated }) {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    confirm_password: '',
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

    if (formData.password != formData.confirm_password) {
        setError('Passwords do not match');
        clearErrorAfterTimeout();
        return;
      }

    try {
      const response = await fetch('http://localhost:5001/register/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: formData })
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success){
          console.log('User is now registered!');
          
          navigate('/login');
        }
        else if (result.success == 'True2'){
            console.log('User is already registered');
            setError(result.message);
            clearErrorAfterTimeout();
            navigate('/login');
          }
        else{
          console.log('Invalid Register');
          setError(result.message);
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
      name: '',
      username: '',
      password: '',
      confirm_password: '',
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
    <div className="bkgnd">
      <div className="login-container2">
        <h2 className="text_center">Create your Account!:</h2>
        <form className="login-form" onSubmit={handleSubmit}>
        <input
            placeholder="name"
            type="text"
            className="text-box4"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <br />
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
          <input
            placeholder="confirm password"
            type="password" // It's better to use type="password" for password fields
            className="text-box4"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleInputChange}
          />
          <br />
          {error && <p className="error">{error}</p>}
          <br></br>
          <button type="submit" className="login_button">Create my account</button>
        </form>

        <aside className="aside">
          Already have an account? <br />
          <a href="/login">Log in!</a>
        </aside>
      </div>
    </div>
  );
}

export default CreateAccount;

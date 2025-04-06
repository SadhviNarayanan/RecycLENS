import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function LogIn({ setIsAuthenticated }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

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
          setIsAuthenticated(true);
          navigate('/dashboard');
        } else {
          setError(result.message);
          setIsAuthenticated(false);
          clearErrorAfterTimeout();
        }
      } else {
        setError('Login failed, please try again.');
        clearErrorAfterTimeout();
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
      clearErrorAfterTimeout();
    }

    setFormData({
      username: '',
      password: '',
    });
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const clearErrorAfterTimeout = () => {
    setTimeout(() => {
      setError('');
    }, 1800);
  };

  return (
    <div className="bkgnd">
      <div className="login-container2">
        <h2 className="text_center">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            placeholder="Username"
            type="text"
            className="text-box4"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <input
            placeholder="Password"
            type="password"
            className="text-box4"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {error && <p className="error">{error}</p>}
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

import React, { useState, useEffect } from 'react';
import './App.css';

const Events = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    description: ''
  });

  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    fetchData('http://localhost:5001/get/upcoming/events', setUpcomingEvents);
    fetchData('http://localhost:5001/get/past/events', setPastEvents);
  }, []);

  const fetchData = async (url, setter) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch data');
      const jsonData = await response.json();
      setter(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5001/event/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: formData })
    })
      .then((response) => {
        if (response.ok) {
          console.log('Data sent successfully');
          window.location.reload();
        } else {
          console.error('Failed to send data');
        }
      })
      .catch((error) => console.error('Error sending data:', error));

    setFormData({ name: '', date: '', description: '' });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="events-page">
      {/* Create Event Section */}
      <section id="create" className="events-section">
        <div className="events-container">
          <h2>Create an Event</h2>
          <form className="event-form" onSubmit={handleSubmit}>
            <label>
              Event Name:
              <input
                type="text"
                name="name"
                className="text-input"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Event Date:
              <input
                type="date"
                name="date"
                className="text-input"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Event Description:
              <textarea
                name="description"
                className="text-area"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </label>
            <button type="submit" className="cta-button">Submit Event</button>
          </form>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="upcoming" className="events-section">
        <div className="events-container">
          <h2>Upcoming Events</h2>
          {upcomingEvents.length === 0 ? (
            <p>No upcoming events.</p>
          ) : (
            <ul className="events-list">
              {upcomingEvents.map((item, index) => (
                <li key={index} className="event-card">
                  <h3>{item.name}</h3>
                  <p><strong>Date:</strong> {item.date}</p>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Past Events Section */}
      <section id="past" className="events-section">
        <div className="events-container">
          <h2>Past Events</h2>
          {pastEvents.length === 0 ? (
            <p>No past events available.</p>
          ) : (
            <ul className="events-list">
              {pastEvents.map((item, index) => (
                <li key={index} className="event-card">
                  <h3>{item.name}</h3>
                  <p><strong>Date:</strong> {item.date}</p>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Events. All rights reserved.</p>
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Events;

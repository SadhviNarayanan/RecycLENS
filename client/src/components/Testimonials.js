// src/components/Testimonials.js
import React from 'react';
import './Testimonials.css'; // Import the CSS file for styling

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container-testimonial">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-item">
            <img src="client1.jpg" alt="Client 1" />
            <p>"This product has changed the way we do business!"</p>
            <h4>Client Name</h4>
          </div>
          <div className="testimonial-item">
            <img src="client2.jpg" alt="Client 2" />
            <p>"The customer service is top-notch, highly recommend!"</p>
            <h4>Client Name</h4>
          </div>
          <div className="testimonial-item">
            <img src="client3.jpg" alt="Client 3" />
            <p>"A game-changer for our company's productivity!"</p>
            <h4>Client Name</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

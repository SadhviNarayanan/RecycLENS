import React from 'react';
import Compost_article from './compost_article.png';
import LunchBox from './lunchbox.png';
import Bottle from './bottle.png';
import Veg from './veg.png';

const Features = () => {
  return (
    <section id="options" style={{ padding: '2rem', backgroundColor: 'white', fontFamily: 'sans-serif' }}>
      <h2 style={{ fontSize: '2rem', color: '#16a34a', marginBottom: '1.5rem' }}>
        Personalized Improvement Tips 🌎
      </h2>
      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        <div style={{ borderRadius: '1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', padding: '1rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#15803d', marginBottom: '0.5rem' }}>
            🌀 The Lifecycle of Your Trash
          </h3>
          <p style={{ marginBottom: '1rem' }}>Curious about what happens when you compost?</p>
          <img src={Compost_article} alt="Eco-Friendly" style={{ width: '100%', borderRadius: '0.5rem' }} />
        </div>

        <div style={{ borderRadius: '1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', padding: '1rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#15803d', marginBottom: '0.5rem' }}>
            🍱 Meal Prepping
          </h3>
          <p style={{ marginBottom: '1rem' }}>Reduce food waste by prepping meals and storing leftovers!</p>
          <img src={LunchBox} alt="Meal Prep" style={{ width: '100%', borderRadius: '0.5rem' }} />
        </div>

        <div style={{ borderRadius: '1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', padding: '1rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#15803d', marginBottom: '0.5rem' }}>
            💧 Reusable Bottles
          </h3>
          <p style={{ marginBottom: '1rem' }}>Swap your plastic bottles for reusable ones!</p>
          <img src={Bottle} alt="Reusable Bottle" style={{ width: '100%', borderRadius: '0.5rem' }} />
        </div>

        <div style={{ borderRadius: '1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', padding: '1rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#15803d', marginBottom: '0.5rem' }}>
            🥕 5 Compostable Surprises
          </h3>
          <p style={{ marginBottom: '1rem' }}>Here are 5 items you didn’t know you could compost!</p>
          <img src={Veg} alt="Compost Items" style={{ width: '100%', borderRadius: '0.5rem' }} />
        </div>
      </div>
    </section>
  );
};

export default Features;

import React from "react";

const Dashboard = () => {
  return (
    <div
      style={{
        padding: '1.5rem',
        backgroundColor: 'white',
        fontFamily: 'sans-serif',
        backgroundImage: 'url("/path/to/cool-background.png")', // Adjust this path accordingly
        backgroundSize: 'cover', // Ensures the background image covers the whole screen
        backgroundPosition: 'center', // Centers the background image
        backgroundAttachment: 'fixed', // Keeps the background fixed during scroll
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'flex-start', // Ensures content starts at the top
      }}
    >
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#16a34a' }}>
        Analytics🌿
      </h1>
      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {/* Achievements Card */}
        <div style={{ borderRadius: '1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '1.25rem' }}>🏆</span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#15803d' }}>Achievements</h2>
          </div>
          <ul style={{ lineHeight: '1.75rem' }}>
            <li>🥇 Gold Recycler – 95% proper disposal</li>
            <li>🥈 Silver Composter – 75% compost efficiency</li>
            <li>🥉 Bronze Sorter – 50% improvement this month</li>
          </ul>
        </div>

        {/* Waste Comparison Card */}
        <div style={{ borderRadius: '1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '1.25rem' }}>👥</span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#15803d' }}>Your Waste vs Others</h2>
          </div>
          <p>Your weekly average: <strong>3.2 kg</strong></p>
          <p>5C average: <strong>4.5 kg</strong></p>
          <p style={{ marginBottom: '1rem' }}>LA average: <strong>5.8 kg</strong></p>
          <div style={{ height: '10px', backgroundColor: '#e5e7eb', borderRadius: '5px', overflow: 'hidden' }}>
            <div style={{ width: '60%', backgroundColor: '#16a34a', height: '100%' }}></div>
          </div>
        </div>

        {/* Improvement Steps */}
        <div style={{ borderRadius: '1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '1.25rem' }}>🍃</span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#15803d' }}>Impact</h2>
          </div>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '1.75rem', listStyle: 'disc' }}>
            <li>Saved 2.1 lbs of CO2 this week 🥬</li>
            <li> Equivalent to Planting 2 trees 🎨</li>
            <li>Diverted 3lbs of waste from landfills 📈</li>
          </ul>
        </div>

        {/* Animated Icon Card (Simple CSS bounce) */}
        <div style={{ borderRadius: '1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '1.25rem' }}>✨</span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#15803d' }}>Your Eco Avatar</h2>
          </div>
          <div className="eco-avatar" style={{ fontSize: '3rem', color: '#4ade80', animation: 'bounce 2s infinite' }}>
            🌱
          </div>
          <p style={{ marginTop: '0.5rem', color: '#4b5563' }}>Level 3: Seedling Hero</p>
        </div>
      </div>

      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
    </div>
  );
};

export default Dashboard;

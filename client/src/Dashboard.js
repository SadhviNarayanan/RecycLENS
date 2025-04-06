import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import './Dashboard.css';
import './App.css';
import Compost from "./compost.png";
import Green from "./leaves.png";
import Guitar from "./guitar.png";

const Dashboard = () => {
  return (
    <div style={{ padding: '1.5rem', backgroundColor: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <div className="dashboard">
        <Sidebar />
        <div className="main-content">
          <Header />
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#16a34a' }}>
            Welcome to RecycLens Dashboard 🌿
          </h1>

          <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {/* Compost Champion Widget */}
            <div style={{ borderRadius: '1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#15803d' }}>Compost Champion</h3>
              <img src={Compost} alt="Compost" style={{ width: '100px', height: '100px', marginBottom: '1rem' }} />
              <p>More compost than trash last week</p>
              <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>15</p>
            </div>

            {/* Green Streak Widget */}
            <div style={{ borderRadius: '1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#15803d' }}>Green Streak</h3>
              <img src={Green} alt="Green" style={{ width: '100px', height: '100px', marginBottom: '1rem' }} />
              <p>For separating waste for 7 days in a row</p>
              <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>7</p>
            </div>

            {/* Recycling Rockstar Widget */}
            <div style={{ borderRadius: '1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#15803d' }}>Recycling Rockstar</h3>
              <img src={Guitar} alt="Guitar" style={{ width: '100px', height: '100px', marginBottom: '1rem' }} />
              <p>Recycling 3 days in a row</p>
              <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

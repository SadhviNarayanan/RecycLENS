import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import './Dashboard.css';
import './App.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard-widgets">
          <div className="widget">
            <h3>VALUE1</h3>
            <p className="count">1,245</p>
            <button>View Details</button>
          </div>
          <div className="widget">
            <h3>VALUE2</h3>
            <p className="count">15,890</p>
            <button>View Details</button>
          </div>
          <div className="widget">
            <h3>VALUE3</h3>
            <p className="count">8</p>
            <button>View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

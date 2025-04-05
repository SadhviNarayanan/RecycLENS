import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Dashboard</h2>
      </div>
      <ul className="sidebar-nav">
        <li><a href="./Option1">Option1</a></li>
        <li><a href="./Option2">Option2</a></li>
        <li><a href="./Option3">Option3</a></li>
        <li><a href="./Option4">Option4</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;

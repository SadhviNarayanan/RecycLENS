import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import RecEvents from './RecEvents';
import Events from './Events';
import Dashboard from './Dashboard';
import GeneralPage from './Wellness';
import Leaderboard from './Leaderboard';
import LandingPage from './LandingPage';
import Profile from './Profile';
import NavigationBar from './NavigationBar';
import LogIn from './LogIn';
import CreateAccount from './CreateAccount';
import Option1 from './Option1';
import PhotoPage from './PhotoPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect root URL to login page */}
          <Route path="/landingPage" element={<LandingPage /> } />
          <Route path="/option1" element={<Option1 /> } />
          <Route path="/image" element={<PhotoPage /> } />
          <Route path="/dashboard" element={<Dashboard /> } />
          <Route path="/generalPage" element={<GeneralPage /> } />
          <Route path="/login" element={<LogIn setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/home" element={<Home /> } /> {/* Redirect unauthorized access to home page to login page */}
          <Route path="/recEvents" element={isAuthenticated ? <RecEvents /> : <Navigate to="/login" />} /> {/* Redirect unauthorized access to home page to login page */}
          <Route path="/events" element={<Events /> } /> {/* Redirect unauthorized access to home page to login page */}
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} /> {/* Redirect unauthorized access to home page to login page */}
          <Route path="/leaderboard" element={isAuthenticated ? <Leaderboard /> : <Navigate to="/login" />} /> {/* Redirect unauthorized access to home page to login page */}
          
          
          
          {/* 
          <Route path="/PastEvents" element={<PastEvents />} />
          <Route path="/winners" element={<Winners />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/ETHome" element={<ETHome />} />
           */}
           
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React, { createContext, useContext, useState, useEffect } from 'react';

const EventContext = createContext();

export const useEventContext = () => useContext(EventContext);

export const EventProvider = ({ children }) => {
  const [cumulativeResults, setCumulativeResults] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem('cumulativeResults');
    if (savedData) {
      setCumulativeResults(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cumulativeResults', JSON.stringify(cumulativeResults));
  }, [cumulativeResults]);

  return (
    <EventContext.Provider value={{ cumulativeResults, setCumulativeResults }}>
      {children}
    </EventContext.Provider>
  );
};

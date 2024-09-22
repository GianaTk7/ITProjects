// Components/noNab/Nonavbar.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Nonavbar = ({ children }) => {
  const location = useLocation();
  const [showNavBar, setShowNavBar] = useState(true);

  useEffect(() => {
    if (location.pathname === '/Signup' || location.pathname === '/Login') {
      setShowNavBar(false);
    } else {
      setShowNavBar(true);
    }
  }, [location]);

  return <div>{showNavBar && children}</div>;
};

export default Nonavbar;

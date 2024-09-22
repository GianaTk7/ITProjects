import React from 'react';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import Nonavbar from '../noNab/Nonavbar';
import { Outlet } from 'react-router-dom'; 

const Layout = () => {
  return (
    <div>
  
      <Nonavbar>
        <Navbar />
      </Nonavbar>
      <main>
        <Outlet /> 
      </main>
      <Nonavbar>
        <Footer />
      </Nonavbar>
    </div>
  );
};

export default Layout;

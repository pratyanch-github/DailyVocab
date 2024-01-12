import React, { useEffect, useState } from 'react';
import './App.css'; // Import your additional styles
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Header/Footer.jsx';


function App() {

  return (
   
      <div className="bg-gray-900 text-white min-h-screen">
        <Header />
        <div className="container mx-auto p-4">
          <Outlet />
        </div>
        <Footer />
      </div>

  );
}

export default App;

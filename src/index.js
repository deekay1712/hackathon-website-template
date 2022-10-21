import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/home/Home';
import AboutUs from './components/aboutUs/AboutUs';
import NavBar from './components/navBar/NavBar';
import Tracks from './components/tracks/Tracks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Home />
    <AboutUs />
    <Tracks />
  </React.StrictMode>
);


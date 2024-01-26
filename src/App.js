import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './Sections/Home/Home';
import About from './Sections/About/About';
import Portfolio from './Sections/Portfolio/Portfolio';
import Contact from "./Sections/Contact/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;

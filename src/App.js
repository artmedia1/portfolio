import React from "react";
import Navbar from './components/Navbar/Navbar';
import Home from './Sections/Home/Home';
import About from './Sections/About/About';
import Portfolio from './Sections/Portfolio/Portfolio';
import Contact from "./Sections/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

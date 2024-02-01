import React from "react";
import Navbar from './components/Navbar/Navbar';
import Home from './Sections/Home/Home';
import About from './Sections/About/About';
import Portfolio from './Sections/Portfolio/Portfolio';
import Contact from "./Sections/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Experience from "./Sections/Experience/Experience";
import Education from "./Sections/Education/Education"
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

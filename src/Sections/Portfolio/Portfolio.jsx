import React from "react";
import "../Section.css";
import "./Portfolio.css";
import Carousel from "./Carousel";
import projects from "./ProjectsData";


function Portfolio() {
  //Note: the projects are passed on to carousel and then is mapped to cards
  
  return (
    <section id="PortfolioSection">
      <h1>Portfolio</h1>
      <div>
        <Carousel projects={projects} />
      </div>
    </section>
  );
}

export default Portfolio;

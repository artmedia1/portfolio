import React from "react";
import "../Section.css";
import "./Portfolio.css";
import Carousel from "./Carousel";
import ProjectCard from "./ProjectCard"; // Adjust the path according to your file structure


function Portfolio() {
  // Define the slides for the carousel
  const projects = [
    { imageSrc: "/assets/project1.png", projectName: "Legend 1" },
    { imageSrc: "/assets/project2.gif", projectName: "Legend 2" },
    { imageSrc: "/assets/project3.png", projectName: "Legend 3" },
    { imageSrc: "/assets/profile-pic.png", projectName: "Legend 4" },
  ];

  return (
    <section id="PortfolioSection">
      <h1>Portfolio</h1>
      <div>
        {/* <Carousel slides={slides} /> */}
        {/* <ProjectCard cards={cards}/> */}
        <Carousel projects={projects} />
      </div>
    </section>
  );
}

export default Portfolio;

import React from "react";
import "../Section.css";
import "./Portfolio.css";
import Carousel from "./Carousel";
import ProjectCard from "./ProjectCard"; // Adjust the path according to your file structure


function Portfolio() {
  //Note: the projects are passed on to carousel and then is mapped to cards
  const projects = [
    { imageSrc: "/assets/climate-quest.png", projectName: "Climate Quest", projectDescription: "This project is a web application that leverages ChatGPT and other APIs to provide users with real-time weather data and personalized attire recommendations. It's designed to offer an interactive and user-friendly interface for getting weather updates and attire suggestions."},
    { imageSrc: "/assets/alphen.gif", projectName: "Discord Bot - Alphen" },
    { imageSrc: "/assets/portfolio.png", projectName: "Portfolio website" },
    { imageSrc: "/assets/travel-tracker.png", projectName: "Travel Tracker" },
  ];

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

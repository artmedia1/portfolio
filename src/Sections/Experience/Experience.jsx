import React from "react";
import "../Section.css";
import "./Experience.css";
import experienceData from './ExperienceData'; // Make sure the path is correct

function Experience() {
  return (
    <section id="ExperienceSection">
      <h1>Experience</h1>
      {experienceData.map((exp, index) => (
        <div key={index} className="experience-text">
          <h2>{exp.role} @ {exp.company}</h2>
          <h3>{exp.location} | {exp.duration}</h3>
          <p>{exp.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Experience;

import React from "react";
import "../Section.css";
import "./Education.css";
import educationData from "./EducationData";

function Experience() {
  return (
    <section id="EducationSection">
      <h1>Education</h1>
      {educationData.map((education, index) => (
        <div key={index} className="education-text">
          <h2>{education.degree} @ {education.institution}</h2>
          <h3>{education.location} | {education.duration}</h3>
          <p>{education.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Experience;

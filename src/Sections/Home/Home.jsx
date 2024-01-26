import React from "react";
import "../Section.css";
import "./Home.css";
import Grid from "@mui/material/Grid";
import Terminal from "./Terminal";
import Button from "@mui/material/Button";
import ArticleIcon from "@mui/icons-material/Article";

function Home() {
  const openResume = () => {
    const resumePath = `${process.env.PUBLIC_URL}/assets/resume.pdf`;
    window.open(resumePath, "_blank");
  };

  return (
    <section id="HomeSection">
      <Grid container spacing={12} style={{ height: "100vh" }}>
        <Grid item xs={12} lg={6} container className="intro-container">
          <Grid item textAlign={"left"} className="intro">
            <span className="hello">Hello,</span>
            <br />
            <span className="aboutText">
              I'm
              <span className="aboutName"> Randy Huynh</span>
              <br />
              Software Developer
            </span>
            <p className="aboutDescription">
              New Grad Computer Engineering student from York University
            </p>
            <Button
              variant="contained"
              className="resume-btn"
              onClick={openResume}
            >
              <ArticleIcon className="icon-spacing" />
              Resume
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6} container className="terminal-container">
          <Grid item >
            <Terminal />
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}
export default Home;

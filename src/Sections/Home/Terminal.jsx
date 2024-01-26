import React from "react";
import "./Terminal.css";
import Grid from "@mui/material/Grid";

function Terminal() {
  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-button red"></div>
        <div className="terminal-button yellow"></div>
        <div className="terminal-button green"></div>
      </div>
      <div className="terminal-body">
        <Grid container spacing={2}>
          <Grid item xs="auto">
            <span className="prompt-text">user@localhost:~$ </span>
          </Grid>
          <Grid item xs="auto" container justifyContent="flex-start">
            <span className="typed-text">Hello World!</span>
          </Grid>
          <Grid item xs={4} container justifyContent="flex-start"></Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Terminal;

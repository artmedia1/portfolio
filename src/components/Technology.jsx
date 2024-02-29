import React from "react";
import Typography from "@mui/material/Typography";
import "./Technology.css";

function Technology(props) {
  return (
      <Typography className="skills" sx={{ mb: 1.5 }} color="white" align="left">
        {props.technologies}
      </Typography>
  );
}

export default Technology;

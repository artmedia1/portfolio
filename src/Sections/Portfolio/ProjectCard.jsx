import React, { useEffect, useRef } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./ProjectCard.css";

function ProjectCard(props) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      const parentDiv = cardRef.current.parentNode;
      parentDiv.classList.add("card-container");
    }
  }, []);

  return (
    <Card ref={cardRef} className="card">
      <div>
        <CardMedia
          className="card-media"
          component="img"
          alt="project_pic"
          image={props.imageSrc}
        />
      </div>

      <CardContent className="card-content">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="project-title"
        >
          {props.projectName}
        </Typography>
        <Typography variant="body2" className="project-description">
          {props.projectDescription}
        </Typography>
      </CardContent>
      <CardActions className="card-actions">
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;

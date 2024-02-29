import React, { useEffect, useRef } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import "./ProjectCard.css";
import Technology from "../../components/Technology";

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
          {console.log(props.technologies)}
        </Typography>
        <div className="technology-container">
          {props.technologies.split(", ").map((technology, index) => (
            <Technology key={index} technologies={technology} />
          ))}
        </div>

        <Typography variant="body2" className="project-description">
          {props.projectDescription}
        </Typography>
      </CardContent>
      <CardActions className="card-actions">
        {props.githubLink && (
          <Button
            size="small"
            component="a"
            href={props.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Button>
        )}
        {props.demoLink && (
          <Button
            size="small"
            component="a"
            href={props.demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default ProjectCard;

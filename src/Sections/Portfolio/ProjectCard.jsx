import React, { useEffect, useRef } from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import './Carousel.css'

function ProjectCard(props) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      const parentDiv = cardRef.current.parentNode;
      parentDiv.classList.add('test');
    }
  }, []);

  return (
    <Card ref={cardRef} sx={{ maxWidth: "70vw" }}>
      <CardMedia
        component="img"
        alt="project_pic"
        height="270"
        image={props.imageSrc}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.projectName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;

import React from "react";
import Slider from "react-slick";
import ProjectCard from "./ProjectCard";
import "./Carousel.css";

// const Carousel = (props) => (
//   <ResponsiveCarousel>
//     {props.slides.map((slide, index) => (
//       <React.Fragment key={index}>
//         <div className="test3">
//           <img className="test" src={slide.imageSrc} alt={slide.legend} />
//           <p className="legend">{slide.legend}</p>
//         </div>
//         <div className="test2">
//           <p>Github</p>
//         </div>
//       </React.Fragment>
//     ))}
//   </ResponsiveCarousel>
// );

// export default Carousel;

function Carousel({ projects }) {
  const settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
    //   {
    //     breakpoint: 1750,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 1200,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    ],
  };

  return (
    <Slider {...settings}>
      {projects.map((project, index) => (
        <div key={index}>
          <ProjectCard
            imageSrc={project.imageSrc}
            projectName={project.projectName}
          />
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;

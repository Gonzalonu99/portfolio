import React from "react";
import ClimaPhoto from "../../images/clima.png";
import BackendPhoto from "../../images/proyecto-backend.png";
import AutoshopPhoto from "../../images/autoshop.png";

const Projects = () => {
  const projectArray = [
    {
      id: "Autoshop",
      img: AutoshopPhoto,
      title: "AutoShop-365",
      link: "http://a365.com.ar/",
    },
    {
      id: "projectsWeather-app",
      img: ClimaPhoto,
      title: "Weather App",
      link: "https://nunez-weatherapp.web.app",
    },
    {
      id: "projectsMongoDB",
      img: BackendPhoto,
      title: "Cymbals CRUD",
      link: "https://github.com/Gonzalonu99/backend-express-mongoDB",
    },
  ];
  const handleProjectClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="pr-flex">
      {projectArray.map((project, index) => (
        <div
          key={index}
          className='project-box'
          style={{
            position: "relative",
            width: "350px",
            height: "350px",
            margin: "10px",
            overflow: "hidden",
          }}
          onClick={() => handleProjectClick(project.link)}
        >
          <div
            className="project-image"
            style={{
              backgroundImage: `url(${project.img})`,
            }}
          />
          <div className="project-overlay">
            <div className="project-title">{project.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

import React from "react";
import "./projects.css";
import { Box, Typography } from "@mui/material";
import Projects from "./Cards";

const ProjectSection = () => {
  return (
    <div id="projects">
      <Box className='project-st-container'>
        <Typography
          className="project-st"
          variant="h2"
          sx={{
            fontFamily: "Playfair Display, serif",
            fontWeight: "bold",
            width: "auto",
          }}
        >
          Some Projects
        </Typography>
      </Box>
      <div>
        <Projects/>
      </div>
    </div>
  );
};

export default ProjectSection;

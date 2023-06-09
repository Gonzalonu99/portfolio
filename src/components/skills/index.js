import React from "react";
import "./skills.css";
import { Box, Typography } from "@mui/material";
import SkillBoxes from "./skBox";

const Skills = () => {
  return (
    <div id="skills">
      <Box className="sk-st-container">
        <Typography
          className="skills-subtitle"
          variant="h2"
          sx={{
            fontFamily: "Playfair Display, serif",
            fontWeight: "bold",
            width: "auto",
          }}
        >
          Skills 
        </Typography>
      </Box>
      <div>
        <SkillBoxes/>
      </div>
    </div>
  );
};

export default Skills;

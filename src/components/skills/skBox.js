import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import DesktopMacRoundedIcon from "@mui/icons-material/DesktopMacRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
const SkillBoxes = () => {
  const skillArray = [
    {
      icon: <StorageRoundedIcon sx={{ fontSize: "50px" }} className="sk-icon-pr"/>,
      category: "Back-End",
      skills: ["Node.js", "Express.js", "MongoDB", "GraphQL"],
    },
    {
      icon: <DesktopMacRoundedIcon sx={{ fontSize: "50px" }} className="sk-icon-pr"/>,
      category: "Front-End",
      skills: [
        "HTML5 / CSS3",
        "JavaScript",
        "React.js",
        "Bootstrap / Styled-components",
      ],
    },
    {
      icon: <BuildRoundedIcon sx={{ fontSize: "50px" }} className="sk-icon-pr"/>,
      category: "Tools",
      skills: ["GIT", "GitHub", "Postman", "Visual Studio"],
    },
  ];
  const skillBoxesRef = useRef([]);
  const hoverRef = useRef(null);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        const { target } = entry;
        const { classList } = target;
        if (entry.isIntersecting) {
          if (!classList.contains("fade-in")) {
            classList.add("fade-in");
          }
        } else {
          classList.remove("fade-in");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    skillBoxesRef.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="sk-flex">
      {skillArray.map((skill, index) => (
        <Box
          key={index}
          className="sk-box"
          ref={(el) => (skillBoxesRef.current[index] = el)}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "20px",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={() => {
            skillBoxesRef.current[index].style.transform = "scale(1.1)";
          }}
          onMouseLeave={() => {
            skillBoxesRef.current[index].style.transform = "scale(1)";
          }}
        >
          <Box
            className="sk-icon-container"
            sx={{ marginBottom: "10px", paddingLeft: "30px" }}
          >
            {skill.icon}
          </Box>
          <Typography
            className="sk-category-name"
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontFamily: "Playfair Display, serif",
              paddingLeft: "35px",
            }}
          >
            {skill.category}
          </Typography>
          <List sx={{ marginLeft: "20px" }}>
            {skill.skills.map((item, skillIndex) => (
              <ListItem key={skillIndex} component="ul">
                <ListItemIcon>
                  <span className="sk-list-icon">▶</span>
                </ListItemIcon>
                <Typography
                  className="sk-list-text"
                  variant="body1"
                  component="span"
                  sx={{
                    fontFamily: "Playfair Display, serif",
                    fontWeight: "bold",
                  }}
                >
                  {item}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </div>
  );
};

export default SkillBoxes;

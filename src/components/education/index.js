import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import "./education.css";
import Estudios from "./estudios";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const estudiosRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top } = estudiosRef.current.getBoundingClientRect();
      const isVisible = top < window.innerHeight - 100;
      setIsVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      id="education"
      ref={estudiosRef}
      className={`education ${isVisible ? "fade-in" : ""}`}
    >
      <Box className="ed-st-container">
        <Typography
          className="education-subtitle"
          variant="h2"
          sx={{
            fontFamily: "Playfair Display, serif",
            fontWeight: "bold",
            width: "auto",
          }}
        >
          Education
        </Typography>
      </Box>
      <div className="estu-cont">
        <Estudios />
      </div>
    </div>
  );
};

export default Education;

import { Box, Typography } from "@mui/material";
import React from "react";
import './education.css';

const Estudios = () => {
  const misEstudios = [
    {
      carrera: "Diploma in Fullstack Development",
      institución: "Academia Numen - graduated",
      estado: "2021-2022",
    },
    {
      carrera: "Bachelor in Information Systems",
      institución: "Universidad Nacional de Luján - in progress",
      estado: "2023",
    },
  ];
  return (
    <div className="mise-flex">
      {misEstudios.map((item) => (
        <Box 
            key={item.carrera} className="mise-box"
            sx={{border: "2px solid #046380"}}
        >
          <Typography className="mise-carrera" variant="h6">{item.carrera}</Typography>
          <Typography className="mise-año" variant="subtitle2">{item.estado}</Typography>
          <Typography className="mise-place" variant="body2">{item.institución}</Typography>
        </Box>
      ))}
    </div>
  );
};

export default Estudios;

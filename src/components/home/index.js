import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import "../home/home.css";
import LogoGN from "../../images/gnSombraLogo.png";
import fotoGN from "../../images/fotoSinFondo.png";
import pdfCv from '../../assets/NunezCVEspañol.pdf';

const HomeSection = () => {
  const descargarArchivoHome = () => {
    const link = document.createElement('a');
    link.href = pdfCv;
    link.download = 'NunezCVEspañol.pdf';
    link.click();
  };
  return (
    <div className="home" id="home-section">
      <Box className="home-fs-subtitle">
        <Divider
          sx={{
            backgroundColor: "#046380",
            flexGrow: 1,
            height: "2px",
            width: "7rem",
          }}
          className="home-line-subtitle"
        />
        <Typography
          className="home-subtitle"
          sx={{ paddingLeft: ".5rem", fontSize: "20px", fontWeight: "bold", fontFamily: "Playfair Display, serif" }}
        >
          Fullstack Developer
        </Typography>
      </Box>
      <Box className="home-h1-box">
        <Typography
          className="home-title"
          variant="h2"
          sx={{ fontFamily: "Playfair Display, serif", fontWeight: "bold" }}
        >
          Hello there !
        </Typography>{" "}
        <br />
        <Typography
          className="home-title"
          variant="h2"
          sx={{ fontFamily: "Playfair Display, serif", fontWeight: "bold" }}
        >
          I'm <span className="home-span">G</span>onzalo
        </Typography>{" "}
        <br />
        <Typography
          className="home-title"
          variant="h2"
          sx={{ fontFamily: "Playfair Display, serif", fontWeight: "bold" }}
        >
          <span className="home-span">N</span>úñez.
        </Typography>
      </Box>
      <Box className="home-text-btn-box">
        <Typography
          className="home-text"
          variant="h6"
          sx={{ fontFamily: "Playfair Display, serif" }}
        >
          I'm a Fullstack Developer from Buenos Aires, Argentina.
          <br /> I'm a React fan and I enjoy building effective and functional
          web applications. <br />
          I'm here to help you. Let's work together to bring your ideas to life!
        </Typography>
        <Button
          className="home-dw-btn"
          sx={{
            backgroundColor: "#046380",
            color: "#fff",
            display: {
              xs: "flex",
              sm: "none",
              md: "none",
              lg: "none",
              xl: "none",
            },
            position: "relative",
            marginTop: "20px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          onClick={descargarArchivoHome}
        >
          Download CV
        </Button>
      </Box>
      <div className="img-logo-container">
        <div className="logo-container">
          <img src={LogoGN} alt="Logo-GN" className="home-logo-grande" />
        </div>
        <div className="foto-container">
          <img src={fotoGN} alt="Foto-GN" className="home-foto-grande" />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;

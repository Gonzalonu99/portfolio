import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../images/gnLogo.png";
import DescargarCV from "./descargarCV";
import "../navbar/navbar.css";

const pages = ["Education", "Skills", "Projects"];

function ResponsiveAppBar() {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <AppBar
      id="navbar-section"
      style={{
        backgroundColor: "#dae9ee",
        color: "#000",
        width: "100%",
        boxShadow: "none",
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <img src={Logo} style={{ width: "5.5em" }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            className="logo-apellido"
            sx={{
              mr: 2,
              display: { xs: "flex", sm: "flex", md: "flex" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
            style={{ marginLeft: "-1em" }}
          >
            <span className="full-name">NÚÑEZ</span>
            <span className="initial">N</span>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            {pages.map((page) => (
              <MenuItem className="menu-item">
                <Typography
                  key={page}
                  component="a"
                  onClick={() => handleScrollToSection(page.toLowerCase())}
                  sx={{
                    px: 0.5,
                    py: 1,
                    textDecoration: "none",
                  }}
                >
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Box>
          <DescargarCV />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

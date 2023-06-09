import {
  Box,
  Container,
  Link,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import React from "react";
import Logo from "../../images/gnLogo.png";
import "./footer.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <div id="footer">
      <Container className="footer-left">
        <Box className="logo-footer-container">
          <img
            src={Logo}
            alt="Logo-footer"
            style={{ width: "12rem" }}
            className="footer-logo"
          />
          <Typography
            className="footer-logo-text"
            variant="h5"
            sx={{ fontFamily: "monospace", fontWeight: "bold", color: "#fff" }}
          >
            NÚÑEZ
          </Typography>
        </Box>
        <Box
          className="social-icons-container"
          sx={{ display: "flex", justifyContent: "flex-start" }}
        >
          <Link
            className="social-icons-link"
            href="https://api.whatsapp.com/send?phone=541139371486"
          >
            <WhatsAppIcon className="social-icon" />
          </Link>
          <Link
            className="social-icons-link"
            href="https://www.linkedin.com/in/gonzalo-nunez-web-developer/"
          >
            <LinkedInIcon className="social-icon" />
          </Link>
          <Link
            className="social-icons-link"
            href="https://github.com/Gonzalonu99"
          >
            <GitHubIcon className="social-icon" />
          </Link>
          <Link
            className="social-icons-link"
            href="https://www.instagram.com/gonzalo.nunez99/"
          >
            <InstagramIcon className="social-icon" />
          </Link>
        </Box>
      </Container>
      <Container className="footer-list-con">
        <List>
          <ListItem>
            <ListItemIcon>
              <span className="sk-list-icon">▶</span>
            </ListItemIcon>
            <Typography variant="body1" className="footer-item-text">
              B.A., Argentina
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <span className="sk-list-icon">▶</span>
            </ListItemIcon>
            <Typography variant="body1" className="footer-item-text">
              +541139371486
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <span className="sk-list-icon">▶</span>
            </ListItemIcon>
            <Typography variant="body1" className="footer-item-text">
              <Link href="mailto:gonzalonu99@gmail.com" color="inherit">
                gonzalonu99@gmail.com
              </Link>
            </Typography>
          </ListItem>
        </List>
      </Container>
      <div className="footer-rights">
        <Typography className="ft-rights-text">
          &copy; Designed and built by Gonzalo Núñez
        </Typography>
      </div>
    </div>
  );
};

export default Footer;

import { Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Footer = ({ title, description }) => {
  return (
    <footer style={{ marginTop: 4, backgroundColor: "rgb(32,32,32)",padding:10 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" align="center" component="p">
          {description}{" "}
        </Typography>
        <Typography variant="body2" align="center">
          Copyright ©<Link href="#" color="inherit">Your website</Link>
          {new Date().getFullYear}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;

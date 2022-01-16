import React from "react";
import "./Footer.css";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <footer className="footer">
      <Container noMaxWidth={true}>
        <span>&copy;&nbsp;TaskTracker</span>
      </Container>
    </footer>
  );
};

export default Footer;

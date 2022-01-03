import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../../images/logo.png";
const Footer = () => {
  return (
    <>
      <Container
        bg="light"
        fluid="md"
        className="pt-4 d-flex justify-content-center"
      >
        <Row>
          <Col xs={12} md="auto">
            {" "}
            <h6>Contact us</h6>
            <ul className="list-unstyled">
              <li>Email: bestbazer@gmail.com</li>
              <li>Phone: 01666562666</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </Col>
          <Col xs={12} md="auto" className="p-3 text-center">
            {" "}
            <img src={logo} alt="footer-logo" />
          </Col>
          <Col xs={12} md="auto">
            <h6>WHO WE ARE</h6>
            <ul className="list-unstyled">
              <li>About us</li>
              <li>Reasons to shop</li>
              <li>Meet the team</li>
              <li>Cookies & privacy</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;

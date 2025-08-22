


import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NationalMuseumStyle.css";

function VirtualTour() {
  return (
    <div>
      {/* Main Navigation */}
      <Navbar bg="white" expand="lg" sticky="top" className="main-nav shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/National_Museum_of_the_Philippines_logo.svg/1200px-National_Museum_of_the_Philippines_logo.svg.png"
              alt="National Museum Logo"
              height="60"
              className="me-3"
            />
            <div>
              <div className="brand-text">MUSEUM OF THE</div>
              <div className="brand-subtext">FINE ARTS</div>
            </div>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="mx-2 nav-link-custom">HOME</Nav.Link>
              <Nav.Link as={Link} to="/virtual-tour" className="mx-2 nav-link-custom">360 VIRTUAL TOUR</Nav.Link>
              <Nav.Link href="#about" className="mx-2 nav-link-custom">ABOUT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Virtual Tour Iframe */}
      <div style={{ width: "100%", height: "calc(100vh - 76px)" }}>
        <iframe
          src="/tour/index.html"
          title="Virtual Tour"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
}

export default VirtualTour;

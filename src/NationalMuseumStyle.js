import React, { useState } from "react";
import { Navbar, Nav, Container, Row, Col, Button, Carousel} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NationalMuseumStyle.css";

const NationalMuseumStyle = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div>
      {/* Main Navigation */}
      <Navbar bg="white" expand="lg" sticky="top" className="main-nav shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/National_Museum_of_the_Philippines_logo.svg/1200px-National_Museum_of_the_Philippines_logo.svg.png"
              alt="Museum Fine Art Logo"
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
              <Nav.Link href="/tour/index.html" className="mx-2 nav-link-custom">360 VIRTUAL TOUR</Nav.Link>
              <Nav.Link href="#about" className="mx-2 nav-link-custom">ABOUT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Carousel */}
      <Carousel className="hero-carousel" fade>
        <Carousel.Item>
          <div
            className="hero-slide"
            style={{
              backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('https://nationalmuseum.gov.ph/wp-content/uploads/2023/06/NMFineArts-Building-scaled.jpg')",
            }}
          >
            <div className="hero-content">
              <h1 className="display-3 fw-bold mb-3 text-shadow">NatioMuse V-Tour</h1>
              <p className="lead mb-4">Home to the National Art Collections</p>
              <div className="hero-buttons">
                <Button href="/tour/index.html" variant="primary" size="lg" className="fw-bold me-3">Start using the 360 Virtual Tour</Button>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Virtual Tours CTA */}
      <section className="virtual-tours-cta py-5">
        <Container>
          <div className="cta-content text-center text-white">
            <h2 className="display-5 fw-bold mb-3">Can't Visit In Person?</h2>
            <p className="lead mb-4">Take a virtual tour of our museums from anywhere in the world</p>
            <Button as={Link} to="/virtual-tour" variant="light" size="lg" className="me-3">Start Virtual Tour</Button>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="museum-footer">
        <div className="footer-main">
          <Container>
            <Row className="py-5">
              <Col lg={4} className="mb-4">
                <div className="footer-brand mb-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/National_Museum_of_the_Philippines_logo.svg/1200px-National_Museum_of_the_Philippines_logo.svg.png"
                    alt="Museum Fine Art Logo"
                    height="50"
                    className="mb-3"
                  />
                  <h5 className="text-white">Museum of the Fine Arts Philippines</h5>
                </div>
                <p className="text-white-50">
                  The National Museum manages and develops the national reference collections in the areas 
                  of cultural heritage and natural history, and carries out permanent research programs in 
                  biodiversity, geological history, and cultural heritage.
                </p>
                <div className="social-links mt-4">
                  <a href="#" className="social-footer-icon"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="social-footer-icon"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="social-footer-icon"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="social-footer-icon"><i className="bi bi-youtube"></i></a>
                </div>
              </Col>
              <Col lg={2} md={6} className="mb-4">
                <h6 className="text-white mb-3">Quick Links</h6>
                <ul className="list-unstyled footer-links">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Collections</a></li>
                </ul>
              </Col>
              
            </Row>
          </Container>
        </div>
        <div className="footer-bottom">
          <Container>
            <Row className="py-3">
              <Col md={6}>
                <p className="mb-0 text-white-50">
                  Made by CSC6 
                    /  © {new Date().getFullYear()} National Museum of the Philippines. All Rights Reserved.
                </p>
              </Col>
              <Col md={6} className="text-md-end">
                <a href="#" className="footer-link me-3">Privacy Policy</a>
                <a href="#" className="footer-link me-3">Terms of Use</a>
                <a href="#" className="footer-link">Sitemap</a>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </div>
  );
};

export default NationalMuseumStyle;
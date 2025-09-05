import React, { useState, useRef } from "react";
import { Navbar, Nav, Container, Row, Col, Button, Carousel} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NationalMuseumStyle.css";

const NationalMuseumStyle = () => {
  const [activeTab, setActiveTab] = useState("all");
  const carouselRef = useRef(null);

  return (
    <div>
      {/* Main Navigation */}
      <Navbar bg="white" expand="lg" sticky="top" className="main-nav shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src="/tour/img/NationalMuseumPHLogo.jpeg"
              height="60"
              width="60"
              className="d-inline-block align-top"
            />
            <div>
              <div className="brand-text">MUSEUM OF THE</div>
              <div className="brand-subtext">FINE ARTS</div>
            </div>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/" className="mx-2 nav-link-custom">HOME</Nav.Link>
              <Nav.Link href="/tour/index.html" className="mx-2 nav-link-custom">360 VIRTUAL TOUR</Nav.Link>
              <Nav.Link href="#about" className="mx-2 nav-link-custom">ABOUT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Carousel */}
      <div className="carousel-container">
        <Carousel className="hero-carousel" controls={false} ref={carouselRef}>
          <Carousel.Item>
            <div
              className="hero-slide"
              style={{
                backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('/tour/img/FineArtsMuseum.PNG')",
              }}
            >
              <div className="hero-content">
                <h1 className="display-3 fw-bold mb-3 text-shadow">Fine Arts Virtual Tour</h1>
                <p className="lead mb-4">Home to the National Art Collections</p>
                <div className="hero-buttons">
                  <Button href="/tour/index.html" variant="primary" size="lg" className="fw-bold me-3">Start using the 360 Virtual Tour</Button>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div
              className="hero-slide"
              style={{
                backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('/tour/img/SpoliariumHall.PNG')",
              }}
            >
              <div className="hero-content">
                <h1 className="display-3 fw-bold mb-3 text-shadow">Discover Philippine Fine Art Heritage</h1>
                <p className="lead mb-4">Explore the Rich Cultural Collections</p>
                <div className="hero-buttons">
                  <Button href="/tour/index.html" variant="primary" size="lg" className="fw-bold me-3">Start using the 360 Virtual Tour</Button>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        {/* Custom Navigation Buttons */}
        <Button
          className="carousel-nav-btn carousel-nav-prev"
          onClick={() => carouselRef.current?.prev()}
          variant="outline-light"
          size="lg"
        >
          <i className="bi bi-chevron-left"></i>
        </Button>
        <Button
          className="carousel-nav-btn carousel-nav-next"
          onClick={() => carouselRef.current?.next()}
          variant="outline-light"
          size="lg"
        >
          <i className="bi bi-chevron-right"></i>
        </Button>
      </div>

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
                    src="/tour/img/NationalMuseumPHLogo.jpeg"
                    alt="Museum Fine Art Logo"
                    height="50"
                    className="mb-3"
                  />
                  <h5 className="text-white">Museum of the Fine Arts Philippines</h5>
                </div>
                <p className="text-white-50">
                  DISCLAIMER: All resources, materials, and references used in this project are intended for educational purposes only. This project does not claim ownership of any third-party content and does not intend to infringe upon any copyright or intellectual property rights. All credits and rights remain with their respective owners.
                </p>
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
                  Made by CSC6 *For Education Purposes
                    /  © {new Date().getFullYear()} National Museum of the Philippines. All Rights Reserved.
                </p>
              </Col>
              <Col md={6} className="text-md-end">
                <a href="#" className="footer-link me-3">Privacy Policy</a>
                <a> | </a>
                <a href="#" className="footer-link me-3">Terms of Use</a>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </div>
  );
};

export default NationalMuseumStyle;
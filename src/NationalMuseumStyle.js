import React, { useState } from "react";
import { Navbar, Nav, Container, Row, Col, Card, Button, Carousel, Form, Tab, Tabs } from "react-bootstrap";
import "./NationalMuseumStyle.css";

const NationalMuseumStyle = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar">
        <Container>
          <div className="d-flex justify-content-between align-items-center py-2">
            <div className="social-links">
              <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-twitter"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-youtube"></i></a>
            </div>
            <div className="contact-info">
              <small className="text-white me-3">
                <i className="bi bi-telephone me-2"></i>(02) 8527-1215
              </small>
              <small className="text-white">
                <i className="bi bi-envelope me-2"></i>info@nationalmuseum.gov.ph
              </small>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navigation */}
      <Navbar bg="white" expand="lg" sticky="top" className="main-nav shadow-sm">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/National_Museum_of_the_Philippines_logo.svg/1200px-National_Museum_of_the_Philippines_logo.svg.png"
              alt="National Museum Logo"
              height="60"
              className="me-3"
            />
            <div>
              <div className="brand-text">NATIONAL MUSEUM</div>
              <div className="brand-subtext">OF THE PHILIPPINES</div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="mx-2 nav-link-custom">HOME</Nav.Link>
              <Nav.Link href="#about" className="mx-2 nav-link-custom">ABOUT</Nav.Link>
              <Nav.Link href="#museums" className="mx-2 nav-link-custom">MUSEUMS</Nav.Link>
              <Nav.Link href="#collections" className="mx-2 nav-link-custom">COLLECTIONS</Nav.Link>
              <Nav.Link href="#programs" className="mx-2 nav-link-custom">PROGRAMS</Nav.Link>
              <Nav.Link href="#visit" className="mx-2 nav-link-custom">VISIT</Nav.Link>
              <Nav.Link href="#contact" className="mx-2 nav-link-custom">CONTACT</Nav.Link>
              <Button variant="primary" size="sm" className="ms-3 donate-btn">DONATE</Button>
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
              <h1 className="display-3 fw-bold mb-3 text-shadow">National Museum of Fine Arts</h1>
              <p className="lead mb-4">Home to the National Art Collections</p>
              <div className="hero-buttons">
                <Button variant="primary" size="lg" className="me-3">Plan Your Visit</Button>
                <Button variant="outline-light" size="lg">View Collections</Button>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="hero-slide"
            style={{
              backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('https://nationalmuseum.gov.ph/wp-content/uploads/2023/06/NMNH-Building-scaled.jpg')",
            }}
          >
            <div className="hero-content">
              <h1 className="display-3 fw-bold mb-3 text-shadow">National Museum of Natural History</h1>
              <p className="lead mb-4">Discover Philippines' Natural Heritage</p>
              <div className="hero-buttons">
                <Button variant="primary" size="lg" className="me-3">Explore Now</Button>
                <Button variant="outline-light" size="lg">Virtual Tour</Button>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="hero-slide"
            style={{
              backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('https://nationalmuseum.gov.ph/wp-content/uploads/2023/06/NMAnthropology-Building-scaled.jpg')",
            }}
          >
            <div className="hero-content">
              <h1 className="display-3 fw-bold mb-3 text-shadow">National Museum of Anthropology</h1>
              <p className="lead mb-4">Journey Through Filipino Culture</p>
              <div className="hero-buttons">
                <Button variant="primary" size="lg" className="me-3">Visit Today</Button>
                <Button variant="outline-light" size="lg">Learn More</Button>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Quick Access Section */}
      <section className="quick-access py-4">
        <Container>
          <Row>
            {[
              { icon: "bi-clock", title: "Open Today", desc: "Tuesday - Sunday, 9AM - 6PM", color: "#2E7D32" },
              { icon: "bi-ticket", title: "Free Admission", desc: "For all visitors", color: "#1976D2" },
              { icon: "bi-calendar-event", title: "Special Events", desc: "View upcoming programs", color: "#F57C00" },
              { icon: "bi-book", title: "Research", desc: "Access our archives", color: "#7B1FA2" },
            ].map((item, index) => (
              <Col md={3} key={index} className="text-center mb-3">
                <div className="quick-access-card">
                  <i className={`bi ${item.icon} quick-icon`} style={{ color: item.color }}></i>
                  <h6 className="mt-2 mb-1">{item.title}</h6>
                  <small className="text-muted">{item.desc}</small>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Featured Exhibitions */}
      <section className="featured-exhibitions py-5 bg-light">
        <Container>
          <div className="section-header text-center mb-5">
            <h2 className="section-title">Featured Exhibitions</h2>
            <p className="section-subtitle">Discover our current and upcoming exhibitions</p>
          </div>
          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            className="mb-4 exhibition-tabs"
          >
            <Tab eventKey="all" title="All Exhibitions">
              <Row>
                {[
                  {
                    title: "Spoliarium by Juan Luna",
                    museum: "National Museum of Fine Arts",
                    type: "Permanent Exhibition",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Spoliarium_by_Juan_Luna.jpg/1200px-Spoliarium_by_Juan_Luna.jpg",
                  },
                  {
                    title: "Philippine Biodiversity",
                    museum: "National Museum of Natural History",
                    type: "Permanent Exhibition",
                    image: "https://nationalmuseum.gov.ph/wp-content/uploads/2023/06/NMNH-Interior.jpg",
                  },
                  {
                    title: "Baybayin: Ancient Filipino Script",
                    museum: "National Museum of Anthropology",
                    type: "Special Exhibition",
                    image: "https://nationalmuseum.gov.ph/wp-content/uploads/2023/06/Baybayin.jpg",
                  },
                ].map((exhibition, index) => (
                  <Col md={4} key={index} className="mb-4">
                    <Card className="exhibition-card h-100">
                      <div className="exhibition-image-wrapper">
                        <Card.Img variant="top" src={exhibition.image} />
                        <div className="exhibition-overlay">
                          <Button variant="light" size="sm">Learn More</Button>
                        </div>
                      </div>
                      <Card.Body>
                        <span className="exhibition-type">{exhibition.type}</span>
                        <Card.Title className="mt-2">{exhibition.title}</Card.Title>
                        <Card.Text className="text-muted">
                          <i className="bi bi-building me-2"></i>
                          {exhibition.museum}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab>
            <Tab eventKey="current" title="Current">
              <Row>
                <Col className="text-center py-5">
                  <p>Current exhibitions content here</p>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="upcoming" title="Upcoming">
              <Row>
                <Col className="text-center py-5">
                  <p>Upcoming exhibitions content here</p>
                </Col>
              </Row>
            </Tab>
          </Tabs>
          <div className="text-center mt-4">
            <Button variant="outline-primary" size="lg">View All Exhibitions</Button>
          </div>
        </Container>
      </section>

      {/* Museums Grid */}
      <section id="museums" className="museums-section py-5">
        <Container>
          <div className="section-header text-center mb-5">
            <h2 className="section-title">Visit Our Museums</h2>
            <p className="section-subtitle">Explore the National Museum Complex in Manila and Regional Museums</p>
          </div>
          <Row>
            {[
              {
                title: "National Museum of Fine Arts",
                location: "P. Burgos Drive, Rizal Park, Manila",
                hours: "Tuesday - Sunday, 9AM - 6PM",
                image: "https://nationalmuseum.gov.ph/wp-content/uploads/2023/06/NMFineArts-Building-scaled.jpg",
                highlights: ["Juan Luna Gallery", "Fernando Amorsolo Hall", "National Artists Collection"],
              },
              {
                title: "National Museum of Anthropology",
                location: "P. Burgos Drive, Rizal Park, Manila",
                hours: "Tuesday - Sunday, 9AM - 6PM",
                image: "https://nationalmuseum.gov.ph/wp-content/uploads/2023/06/NMAnthropology-Building-scaled.jpg",
                highlights: ["Ifugao House", "Ivatan House", "Philippine Textiles"],
              },
              {
                title: "National Museum of Natural History",
                location: "P. Burgos Drive, Rizal Park, Manila",
                hours: "Tuesday - Sunday, 9AM - 6PM",
                image: "https://nationalmuseum.gov.ph/wp-content/uploads/2023/06/NMNH-Building-scaled.jpg",
                highlights: ["Tree of Life", "Philippine Biodiversity", "Lolong the Crocodile"],
              },
            ].map((museum, index) => (
              <Col lg={4} key={index} className="mb-4">
                <Card className="museum-card h-100">
                  <div className="museum-image-wrapper">
                    <Card.Img variant="top" src={museum.image} />
                  </div>
                  <Card.Body>
                    <Card.Title className="museum-title">{museum.title}</Card.Title>
                    <div className="museum-info">
                      <p className="mb-2">
                        <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                        {museum.location}
                      </p>
                      <p className="mb-3">
                        <i className="bi bi-clock-fill text-primary me-2"></i>
                        {museum.hours}
                      </p>
                    </div>
                    <div className="museum-highlights">
                      <h6 className="text-muted mb-2">Highlights:</h6>
                      <ul className="highlights-list">
                        {museum.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="museum-actions">
                      <Button variant="primary" className="w-100">Plan Your Visit</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* News & Events Section */}
      <section className="news-events py-5 bg-light">
        <Container>
          <Row>
            <Col lg={8}>
              <h3 className="mb-4">Latest News & Announcements</h3>
              {[
                {
                  date: "December 15, 2024",
                  category: "Announcement",
                  title: "Holiday Schedule for National Museums",
                  excerpt: "The National Museum announces its operating schedule for the holiday season...",
                },
                {
                  date: "December 10, 2024",
                  category: "Exhibition",
                  title: "New Contemporary Art Exhibition Opens",
                  excerpt: "Explore the latest works from emerging Filipino artists in our new exhibition...",
                },
                {
                  date: "December 5, 2024",
                  category: "Program",
                  title: "Free Guided Tours Every Weekend",
                  excerpt: "Join our expert guides for free tours of the National Museum collections...",
                },
              ].map((news, index) => (
                <Card key={index} className="news-card mb-3">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div>
                        <span className={`news-category category-${news.category.toLowerCase()}`}>
                          {news.category}
                        </span>
                        <small className="text-muted ms-3">{news.date}</small>
                      </div>
                    </div>
                    <Card.Title className="news-title">{news.title}</Card.Title>
                    <Card.Text className="text-muted">{news.excerpt}</Card.Text>
                    <a href="#" className="read-more">Read more <i className="bi bi-arrow-right"></i></a>
                  </Card.Body>
                </Card>
              ))}
              <Button variant="outline-primary" className="mt-3">View All News</Button>
            </Col>
            <Col lg={4}>
              <h3 className="mb-4">Upcoming Events</h3>
              <div className="events-list">
                {[
                  { date: "DEC 20", title: "Art Workshop for Kids", time: "2:00 PM - 4:00 PM" },
                  { date: "DEC 25", title: "Christmas Special Tour", time: "10:00 AM - 12:00 PM" },
                  { date: "JAN 5", title: "Curator's Talk", time: "3:00 PM - 5:00 PM" },
                ].map((event, index) => (
                  <div key={index} className="event-item mb-3">
                    <div className="d-flex">
                      <div className="event-date">
                        <div className="date-box">
                          <div className="date-month">{event.date.split(" ")[0]}</div>
                          <div className="date-day">{event.date.split(" ")[1]}</div>
                        </div>
                      </div>
                      <div className="event-details ms-3">
                        <h6 className="mb-1">{event.title}</h6>
                        <small className="text-muted">{event.time}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline-primary" className="w-100 mt-3">View Calendar</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Virtual Tours CTA */}
      <section className="virtual-tours-cta py-5">
        <Container>
          <div className="cta-content text-center text-white">
            <h2 className="display-5 fw-bold mb-3">Can't Visit In Person?</h2>
            <p className="lead mb-4">Take a virtual tour of our museums from anywhere in the world</p>
            <Button variant="light" size="lg" className="me-3">Start Virtual Tour</Button>
            <Button variant="outline-light" size="lg">Watch Video Tours</Button>
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h3>Stay Updated</h3>
              <p className="text-muted">Subscribe to our newsletter for the latest news, events, and exhibitions</p>
            </Col>
            <Col lg={6}>
              <Form className="newsletter-form">
                <Row>
                  <Col sm={8}>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email address"
                      className="mb-2"
                    />
                  </Col>
                  <Col sm={4}>
                    <Button variant="primary" className="w-100">Subscribe</Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
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
                    alt="National Museum Logo"
                    height="50"
                    className="mb-3"
                  />
                  <h5 className="text-white">National Museum of the Philippines</h5>
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
                  <li><a href="#">Museums</a></li>
                  <li><a href="#">Collections</a></li>
                  <li><a href="#">Programs</a></li>
                  <li><a href="#">Research</a></li>
                  <li><a href="#">Publications</a></li>
                </ul>
              </Col>
              <Col lg={2} md={6} className="mb-4">
                <h6 className="text-white mb-3">Visit</h6>
                <ul className="list-unstyled footer-links">
                  <li><a href="#">Plan Your Visit</a></li>
                  <li><a href="#">Group Tours</a></li>
                  <li><a href="#">Accessibility</a></li>
                  <li><a href="#">Museum Shop</a></li>
                  <li><a href="#">Dining</a></li>
                  <li><a href="#">Facilities</a></li>
                </ul>
              </Col>
              <Col lg={4} md={12} className="mb-4">
                <h6 className="text-white mb-3">Contact Information</h6>
                <div className="contact-item mb-3">
                  <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                  <span className="text-white-50">
                    P. Burgos Drive, Rizal Park, Manila, Philippines 1000
                  </span>
                </div>
                <div className="contact-item mb-3">
                  <i className="bi bi-telephone-fill text-primary me-2"></i>
                  <span className="text-white-50">(02) 8527-1215 to 35</span>
                </div>
                <div className="contact-item mb-3">
                  <i className="bi bi-envelope-fill text-primary me-2"></i>
                  <span className="text-white-50">info@nationalmuseum.gov.ph</span>
                </div>
                <div className="contact-item">
                  <i className="bi bi-clock-fill text-primary me-2"></i>
                  <span className="text-white-50">Tuesday - Sunday, 9:00 AM - 6:00 PM</span>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer-bottom">
          <Container>
            <Row className="py-3">
              <Col md={6}>
                <p className="mb-0 text-white-50">
                  © {new Date().getFullYear()} National Museum of the Philippines. All Rights Reserved.
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
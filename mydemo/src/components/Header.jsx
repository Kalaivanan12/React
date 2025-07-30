
import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './Header.css';

function Header() {
  return (
    <>
      <header className="text-white text-center">
        <h1>CAR MAKES</h1>
      </header>

      <Navbar  bg="light" expand="lg" className="shadow sticky-navbar">
        <Container>
          <Navbar.Brand href="#">Car Makes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>

              <NavDropdown title="New Car" id="newcar-dropdown">
                <NavDropdown.Item href="#">BMW</NavDropdown.Item>
                <NavDropdown.Item href="#">Audi</NavDropdown.Item>
                <NavDropdown.Item href="#">Benz</NavDropdown.Item>
                <NavDropdown.Item href="#">Land Rover</NavDropdown.Item>
                <NavDropdown.Item href="#">Hyundai</NavDropdown.Item>
                <NavDropdown.Item href="#">Volkswagen</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Services" id="services-dropdown">
                <NavDropdown.Item href="#">Oil Services</NavDropdown.Item>
                <NavDropdown.Item href="#">Brake Service</NavDropdown.Item>
                <NavDropdown.Item href="#">Tire Service</NavDropdown.Item>
                <NavDropdown.Item href="#">Battery Service</NavDropdown.Item>
                <NavDropdown.Item href="#">Engine Diagnostics Service</NavDropdown.Item>
                <NavDropdown.Item href="#">Fuel System Cleaning Service</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Contact" id="contact-dropdown">
                <NavDropdown.Item href="#">Web: www.carmakes.com</NavDropdown.Item>
                <NavDropdown.Item href="#">Ph: +91-987456123</NavDropdown.Item>
                <NavDropdown.Item href="#">Mail: carmakes12@gmail.com</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

interface NavbarProps {
  isLoggedIn: boolean;
}

const BasicExample: React.FC<NavbarProps> = ({isLoggedIn}) => {

  const handleLogin = async () => {
    // TODO: We will handle the login service here in the future
  }

  return (
    <Navbar expand="lg" className="nav-container">
      <Container>
        <Link to="/" className="navbar-brand">Travelers R Us</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" as={Link} to="/">Hiking</Nav.Link>
            <Nav.Link href="#link" as={Link} to="/">Camping</Nav.Link>
            <NavDropdown title="Travel" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Forums</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Book a Stay</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Coming soon</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Coming Soon</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {isLoggedIn ? (
              <Nav.Link onClick={handleLogin}>Log out</Nav.Link>
            ) : (
              <>
                 <Nav.Link href="#home" as={Link} to="/login">Login</Nav.Link>
                 <Nav.Link href="#link" as={Link} to="/signup">Sign Up</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BasicExample;

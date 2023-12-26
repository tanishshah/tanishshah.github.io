import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown, Container } from 'react-bootstrap';
function NavbarComp(){
    return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home" className="text">Tanish Shah</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Links" id="collasible-nav-dropdown" className="text">
                                <NavDropdown.Item href="https://github.com/tanishshah" className="text">GitHub</NavDropdown.Item>
                                <NavDropdown.Item href="mailto:tanish01.com" className="text">Email</NavDropdown.Item>
                                <NavDropdown.Item href="https://ca.linkedin.com/in/tanish-shah-b5b372177" className="text">LinkedIn</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#about" className="text">About</Nav.Link>
                            <Nav.Link href="#experience" className="text">Experience</Nav.Link>
                            <Nav.Link href="#research" className="text">Research</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
    );
}
export default NavbarComp;
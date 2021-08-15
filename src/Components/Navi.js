import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown, Container } from 'react-bootstrap';
function Navi(){
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
                                <NavDropdown.Item href="https://drive.google.com/drive/folders/1FMmozf_0gc7jLT3_5nxL7ZULEae6Jeqy" className="text">Google Drive</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#about" className="text">About</Nav.Link>
                            <Nav.Link href="#skill" className="text">Skills</Nav.Link>
                            <Nav.Link href="#project" className="text">Projects</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
    );
}
export default Navi;
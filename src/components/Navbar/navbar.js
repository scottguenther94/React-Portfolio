import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../../App.css';

export default function NavHeader({ currentPage, pageChange }) {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbarstyle">
            <Container fluid>
                <Navbar.Brand
                className="text-light" href="#aboutme" onClick={() => pageChange('Aboutme')}>Scotty Guenther</Navbar.Brand>
                <Navbar.Toggle className="bg-light" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav variant="pills" defaultActiveKey="/aboutme" className="justify-contents-end secondary">
                        <Nav.Link className="text-light" href="/React-Portfolio/#aboutme" onClick={() => pageChange('Aboutme')}>About Me</Nav.Link>
                        <Nav.Link className="text-light"  href="/React-Portfolio/#portfolio" onClick={() => pageChange('Projects')}>Portfolio</Nav.Link>
                        <Nav.Link className="text-light" href="/React-Portfolio/#contactme" onClick={() => pageChange('ContactMe')}>Contact Me</Nav.Link>
                        <Nav.Link className="text-light" href="/React-Portfolio/#resume" onClick={() => pageChange('Resume')}>Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};
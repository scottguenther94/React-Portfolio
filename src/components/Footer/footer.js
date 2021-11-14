import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookSquare, faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";


export default function Footer(props){
    return (        
        <Navbar bg="dark" fixed="bottom">
            <Container className="justify-content-center">
                <Navbar.Brand href="https://github.com/scottguenther94" target="_blank">
                <FontAwesomeIcon icon={faGithubSquare} className="fa-2x" style={{ color: 'White'}}/>
                </Navbar.Brand>
                <Navbar.Brand href="https://www.linkedin.com/in/scotty-guenther-483b431a3/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className="fa-2x" style={{ color: 'White'}}/>
                </Navbar.Brand>
                <Navbar.Brand href="https://www.facebook.com/scotty.guenther" target="_blank">
                <FontAwesomeIcon icon={faFacebookSquare} className="fa-2x" style={{ color: 'White'}}/>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
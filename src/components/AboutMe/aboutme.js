import React from "react";
import { Container, Stack, Row, Col, Image, Card } from "react-bootstrap";
import Scotty from '../../Assets/Images/profilepic.jpg';
import '../../App.css';

export default function Aboutme() {
    return (
        <Container>
            <h1 className="text-white aboutstyle">About Me</h1>
            <Stack gap={4}>
                <Row>
                    <Col>
                        <Image className="profile" src={Scotty} rounded />
                    </Col>
                </Row>
                <Row>
                    <Card className="bg-secondary text-white aboutstyle">
                        <Card.Body>
                            <Card.Text>
                            Hi there! My name is Scotty Guenther, and I'm a full-stack developer. I grew up in Atlanta, GA where I learned the value of a collaborative atmosphere through theatre and music. Through college and my early career, I lived in Chicago where I cut my teeth in customer service. I learned the ins and outs of a business, how to identify and satisfy stakeholders. Now, I'm taking everything I've learned about creativity and consumer-focused business and using it to drive my career in the tech industry. I've spent six months working through Northwestern's Full-Stack Coding Bootcamp, and now I have experience using HTML, CSS, JavaScript, Node.js, React.js, MySQL, and more! With a few new competencies in my arsenal, I'm excited for this next stage of my career! 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Stack>
        </Container>
    )
}
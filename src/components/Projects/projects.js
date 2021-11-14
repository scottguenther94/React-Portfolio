import React from "react";
import { Container, Card, Button, Row } from "react-bootstrap";
import fn from '../../Assets/Images/fueornayphoto.png';
import meal from '../../Assets/Images/Meal-App.png';
import weather from '../../Assets/Images/Weather-Dashboard.png';
import password from '../../Assets/Images/Password-Generator.png';
import tracker from '../../Assets/Images/Employee-Tracker.png';
import codequiz from '../../Assets/Images/Code-Quiz.png';
import '../../App.css';

export default function Projects() {
    return (
        <Container>
            <h1 className="text-white aboutstyle">Portfolio</h1>
            <Row className="justify-content-between pb-5">
                <Card className="col-md-3 col-sm-12 project-card pt-1">
                    <Card.Img variant="top" src={fn} />
                    <Card.Body>
                        <Card.Title>Fue or Nay?</Card.Title>
                        <Card.Text>
                        A website built for gamers, by gamers. Find your favorite games, read reviews, and leave your own reviews!
                        </Card.Text>
                            <Row>
                                <Button variant="dark" className="mb-2" href="https://github.com/Fue-Or-Nay/Fue-Or-Nay" target="_blank">GitHub</Button>
                                <Button variant="dark" href="https://fue-or-nay.herokuapp.com/" target="blank">Deployment</Button>
                            </Row>
                    </Card.Body>
                </Card>
                <div className="col-md-1 col-sm-12 pb-5"></div>
                <Card className="col-md-3 col-sm-12 project-card pt-1">
                    <Card.Img variant="top" src={meal} />
                    <Card.Body>
                        <Card.Title>Meal: In or Out</Card.Title>
                        <Card.Text>
                        An app that allows users to organize their dinner plans for the week!
                        </Card.Text>
                        <Row>
                                <Button variant="dark" className="mb-2" href="https://github.com/getSHRKd/Project-1" target="_blank">GitHub</Button>
                                <Button variant="dark" href="https://getshrkd.github.io/Project-1/" target="_blank">Deployment</Button>
                            </Row>
                    </Card.Body>
                </Card>
                <div className="col-md-1 col-sm-12 pb-5"></div>
                <Card className="col-md-3 col-sm-12 project-card pt-1">
                    <Card.Img variant="top" src={codequiz} />
                    <Card.Body>
                        <Card.Title>Code Quiz</Card.Title>
                        <Card.Text>
                        A quiz to test your skills in JavaScript
                        </Card.Text>
                        <Row>
                                <Button variant="dark" className="mb-2" href="https://github.com/scottguenther94/Code-Quiz" target="_blank">GitHub</Button>
                                <Button variant="dark" href="https://scottguenther94.github.io/Code-Quiz/" target="_blank">Deployment</Button>
                            </Row>
                    </Card.Body>
                </Card>
                </Row>
                <Row className="justify-content-between pb-5">
                <Card className="col-md-3 col-sm-12 project-card pt-1">
                    <Card.Img variant="top" src={weather} />
                    <Card.Body>
                        <Card.Title>Weather Dashboard</Card.Title>
                        <Card.Text>
                        Displays this week's weather forecast for any city!
                        </Card.Text>
                        <Row>
                                <Button variant="dark" className="mb-2" href="https://github.com/scottguenther94/Weather-Dashboard" target="_blank">GitHub</Button>
                                <Button variant="dark" href="https://scottguenther94.github.io/Weather-Dashboard/" target="_blank">Deployment</Button>
                            </Row>
                    </Card.Body>
                </Card>
                <div className="col-md-1 col-sm-12 pb-5"></div>
                <Card className="col-md-3 col-sm-12 project-card pt-1">
                    <Card.Img variant="top" src={password} />
                    <Card.Body>
                        <Card.Title>Password Generator</Card.Title>
                        <Card.Text>
                        Generates a random password for the user!
                        </Card.Text>
                        <Row>
                                <Button variant="dark" className="mb-2" href="https://github.com/scottguenther94/PasswordGenerator" target="_blank">GitHub</Button>
                                <Button variant="dark" href="https://scottguenther94.github.io/PasswordGenerator/" target="_blank">Deployment</Button>
                            </Row>
                    </Card.Body>
                </Card>
                <div className="col-md-1 col-sm-12 pb-5"></div>
                <Card className="col-md-3 col-sm-12 project-card pt-1">
                    <Card.Img variant="top" src={tracker} />
                    <Card.Body>
                        <Card.Title>Employee Tracker</Card.Title>
                        <Card.Text>
                        A command line app used to manage a company's employee database
                        </Card.Text>
                        <Row>
                                <Button variant="dark" className="mb-2" href="https://github.com/scottguenther94/Employee-Tracker" target="_blank">GitHub</Button>
                                
                            </Row>
                    </Card.Body>
                </Card>
            </Row>

        </Container>
    )
};
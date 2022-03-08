import React from "react";
import { Container, Stack, ListGroup } from "react-bootstrap";
import '../../App.css';

export default function Resume(){
    return(
        <Container>
            <Stack gap={4}>
                <h1 className="text-white aboutstyle mb-5">Resume</h1>
                <h3><a className="text-white aboutstyle" href="https://docs.google.com/document/d/1C2ARDuCmcmxx1OKMc3kZ86wyqWIXF5Sq/edit?usp=sharing&ouid=102761915423924202916&rtpof=true&sd=true" target="_blank">Click for my resume!</a></h3>
                
                <h3 className="skillslabel text-align-right">Front End Skills</h3>
                <ListGroup>
  <ListGroup.Item variant="light" className="skills">React</ListGroup.Item>
  <ListGroup.Item variant="light" className="skills">Materialize</ListGroup.Item>
  <ListGroup.Item variant="light" className="skills">Bootstrap</ListGroup.Item>
  <ListGroup.Item variant="light" className="skills">Material UI</ListGroup.Item>
  <ListGroup.Item variant="light" className="skills">HTML / CSS</ListGroup.Item>
</ListGroup>
<h3 className="skillslabel text-align-right">Back End Skills</h3>
<ListGroup>
  <ListGroup.Item variant="light" className="skills">Node.js</ListGroup.Item>
  <ListGroup.Item variant="light" className="skills">Express</ListGroup.Item>
  <ListGroup.Item variant="light" className="skills">MySQL / Sequelize</ListGroup.Item>
  <ListGroup.Item variant="light" className="skills">MongoDB / Mongoose</ListGroup.Item>
  <ListGroup.Item variant="light" className="skills">GraphQL / Apollo</ListGroup.Item>
  <ListGroup.Item variant="light" className="skills">RESTful API's</ListGroup.Item>
</ListGroup>
            </Stack>


        </Container>
    )
};
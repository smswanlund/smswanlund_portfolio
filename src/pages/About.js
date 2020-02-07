import React from "react";
import {Container} from "../components/Grid";
import {Row} from "../components/Grid";
import {Col} from "../components/Grid";

function About() {
  return(
    <Container fluid>
      <div className="cardHeader">
        <h1>About Me</h1>
      </div>
      <Row>
        <Col size="md-12">
          <p></p>
        </Col>
      </Row>
    </Container>
  )
}

export default About;

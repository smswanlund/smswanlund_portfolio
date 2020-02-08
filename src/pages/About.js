import React from "react";
import {Container} from "../components/Grid";
import {Row} from "../components/Grid";
import {Col} from "../components/Grid";
import Profile from "./assets/profile.jpg";

function About() {
  return(
    <Container fluid>
      <div className="content">
      <div className="cardHeader">
        <h1>About Me</h1>
      </div>
      <Row className="profile">
        <Col size="md-12">
          <img src={Profile} id="profilePic" alt="profile"></img>
          <p id="aboutContent">Welcome to my Portfolio webpage, powered by React. I'm a graduate of the College of William & Mary, Class of 2019 with a BS in Physics and of the University of Richmond Fullstack Coding Bootcamp. This site has the projects I contributed to during the bootcamp and my contact information.</p>
          <br></br>
          <p id="aboutContent">This site was built using the create-react-app module created by Facebook, functions on a javascript server run through node.js and express.js.  I will be continuing to add to this site as I continue to develop my skills, so look out for updates!</p>

          <a id="resumeLink" href="https://docs.google.com/document/d/1RkcRzh2-q2EerGH5zsT25Cej_ejiIz6Ks8L5T1B349o/edit?usp=sharing">Click Here to view my resume</a>
        </Col>
      </Row>
      </div>
    </Container>
  )
}

export default About;

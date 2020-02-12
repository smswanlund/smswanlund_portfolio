import React from "react";
import {Container} from "../components/Grid";
import Github from "./assets/github.png";
import Linkedin from "./assets/linkedin.png";

function Contact() {
  return(
    <Container fluid>
      <div className="content">
      <div className="cardHeader">
        <h1>Contact</h1>
      </div>
      <p id="emailp">Email me at: <span id="emailval">smswanlund1513@gmail.com</span></p>
      <div style={{textAlign:"center"}}>
        <p> Connect with me on these platforms:</p>
        <img id ="thumbnail" src={Linkedin} alt="linkedin" className="icon" onClick={()=>window.location.assign("https://www.linkedin.com/in/smswanlund")} />
        <img id="thumbnail" src={Github} alt="Github" className="icon" onClick={()=>window.location.assign("https://github.com/smswanlund")} />

      </div>
      </div>
    </Container>  
  );
}

export default Contact;

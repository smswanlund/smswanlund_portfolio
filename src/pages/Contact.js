import React from "react";
import {Container} from "../components/Grid";

function Contact() {
  return(
    <Container fluid>
      <div className="cardHeader">
        <h1>Contact Me</h1>
      </div>
      <p id="emailp">Email me at: <span id="emailval">smswanlund1513@gmail.com</span></p>
      <div style={{textAlign:"center"}}>
        <img src={process.env.PUBLIC_URL+"/assets/images/linkedin.png"} alt="linkedin" className="icon" onClick={()=>window.location.assign("https://www.linkedin.com/in/smswanlund")} />
        <img src={process.env.PUBLIC_URL+"/assets/images/github.png"} alt="Github" className="icon" onClick={()=>window.location.assign("https://github.com/smswanlund")} />

      </div>
    </Container>  
  );
}

export default Contact;

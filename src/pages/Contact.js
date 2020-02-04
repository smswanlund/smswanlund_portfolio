import React, { Component } from "react";
import axios from "axios";
import {Container} from "../components/Grid";
import {Row} from "../components/Grid";
import {Col} from "../components/Grid";
import ReCAPTCHA from "react-google-recaptcha";

let mailSend = ()=>{
  if(!document.getElementById("name").value||!document.getElementById("message").value||!document.getElementById("email").value){
    alert("Please Fill Out all Fields")
  }else{
    axios.post("/api/contact", {
      from:"smswanlund1513@gmail.com",
      to:"muelmac@gmail.com",
      subject:document.getElementById("subject").value,
      html:"<b>Name:</b> "+document.getElementById("name").value+"<br><br><b>Email:</b> "+document.getElementById("email").value+"<br><br><b>Message:</b> "+document.getElementById("message").value
    }).then((res)=>{
      alert("Email sent.");
      document.getElementById("name").value="";
      document.getElementById("email").value="";
      document.getElementById("message").value="";
      document.getElementById("subject").value="";
    })
  }
}

function Contact() {
  return(
    <Container fluid>
      <div className="cardHeader">
        <h1>Contact Me</h1>
      </div>
      <div id="pageBody">
        <Container>
          <Row>
            <Col size="md-3">
              <div className="form-group">
                <label htmlFor="name" >Name:</label>
                <input type="text" id="name" className="form-control" />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" className="form-control" />
                <label htmlFor="subject">Subject:</label>
                <input type="text" className="form-control" id="subject" />
              </div>
            </Col>
            <Col size="md-9">
              <label htmlFor="message">Message:</label>
              <textarea className="form-control" id="message"></textarea>
            </Col>
          </Row>
          <Row>
            <button type="button" id="emailBtn" className="btn btn-lg" onClick={()=>mailSend()}>Send</button>
          </Row>
        </Container>
        </div>
      <div style={{textAlign:"center"}}>
        <img src={process.env.PUBLIC_URL+"/assets/images/linkedin.png"} alt="linkedin" className="icon" onClick={()=>window.location.assign("https://www.linkedin.com/in/smswanlund")} />
        <img src={process.env.PUBLIC_URL+"/assets/images/github.png"} alt="Github" className="icon" onClick={()=>window.location.assign("https://github.com/smswanlund")} />

      </div>
    </Container>  
  );
}

export default Contact;

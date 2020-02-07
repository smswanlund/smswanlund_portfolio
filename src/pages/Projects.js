import React from "react";
import {Container} from "../components/Grid";
import {Row} from "../components/Grid";
import {Col} from "../components/Grid";
import Project from "../components/Project";
import Document from "../components/Document";
import data from "../data";
import Albatross from "./assets/projectImg/albatross.PNG";
import Financial from "./assets/projectImg/financial.PNG";
import rnd from "./assets/projectImg/rnd.PNG";

function Projects() {
    return(
        <Container fluid>
            <div className="cardHeader">
                <h1>Projects and Documents</h1>
            </div>
            <div id="pageBody">
                <Container>
                    <Row>
                        <Col size="md-12">
                            <div className="projectContent">
                                <div className="project1">
                                    <img id="projImg" src={Albatross} alt="albatross"></img>
                                    <Project key={data.projects[0].id} title={data.projects[0].title} service={data.projects[0].service} github={data.projects[0].github} deployment={data.projects[0].deployment}></Project>
                                </div>
                                <div className="project2">
                                    <img id="projImg" src={Financial} alt="financial"></img>
                                    <Project key={data.projects[1].id} title={data.projects[1].title} service={data.projects[1].service} github={data.projects[1].github} deployment={data.projects[1].deployment}></Project>
                                </div>
                                <div className="project3">
                                    <img id="projImg" src={rnd} alt="rnd"></img>
                                    <Project key={data.projects[2].id} title={data.projects[2].title} service={data.projects[2].service} github={data.projects[2].github} deployment={data.projects[2].deployment}></Project>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col size="md-12">
                            <div className="documentContent">
                                {data.documents.map((document)=>(
                                    <Document key={document.id}
                                    title={document.title}
                                    link={document.pdfLink}></Document>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    )
}

export default Projects;

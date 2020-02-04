import React, { Component } from "react";
import {Container} from "../components/Grid";
import {Row} from "../components/Grid";
import {Col} from "../components/Grid";
import Project from "../components/Project";
import Document from "../components/Document";
import data from "../data";

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
                                {data.projects.map((project)=>(
                                    <Project key={project.id}
                                    title={project.title}
                                    service={project.service}
                                    imgSrc={project.imgSrc}
                                    github={project.github}
                                    deployment={project.deployment}
                                    ></Project>
                                ))}
                            </div>
                        </Col>
                    </Row>
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

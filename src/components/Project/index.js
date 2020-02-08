import React, {Component} from "react";

class Project extends Component {
    state={}
    render() {
        return(
        <div className="project">
            <h3 id ="projTitle">{this.props.title}</h3>
            <a id="projLink" href={this.props.github}>Github Repo</a>
            <br></br>
            <a id="projLink" href={this.props.deployment}>Deployed App</a>
        </div>
        )
    }

}

export default Project;
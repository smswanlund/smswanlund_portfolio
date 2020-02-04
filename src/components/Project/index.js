import React, {Component} from "react";

class Project extends Component {
    state={}
    render() {
        return(
        <div className="project">
            <h3>{this.props.title}</h3>
            <img src={this.props.imgSrc} alt={this.props.title}></img>
            <a href={this.props.github}>Github Repo</a>
            <a href={this.props.deployment}>Deployed App</a>
        </div>
        )
    }

}

export default Project;
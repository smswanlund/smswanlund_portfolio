import React, {Component} from "react";

class Document extends Component {
    state={}
    render(){
        return (
            <div className="document">
                <a href={this.props.pdfLink} alt={this.props.title}>{this.props.title}</a>
            </div>
        )
    }

}

export default Document;
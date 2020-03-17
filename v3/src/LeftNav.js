import React from 'react';
var configs = require("./config/prod.json");

class Subject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSubject: this.props.selectedSubject
        };
        this.handleClick = this.handleClick.bind(this);
        this.updateParentState = this.updateParentState.bind(this);
    }

    render() {
        return (
            <button type="button" class="btn btn-secondary left-nav-button" onClick={this.handleClick}>
                {this.props.title}
            </button>
        )
    }

    handleClick() {
        this.setState({selectedSubject: this.props.id}, this.updateParentState);
    }

    updateParentState() {
        this.props.updateState(this.state);
    }
}

class LeftNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            subjects: []
        };
    }

    componentDidMount() {
        fetch(configs.endpoints.subjects)
            .then(res => res.json())
            .then((data) => {
                this.setState({subjects: data});
                console.log(data);
                console.log(this.state);
            })
            .catch(console.log);
    }

    render() {
        return (
            <div class="btn-group-vertical" role="group" aria-label="Basic example">
                {this.state.subjects.map(subject =>
                    <Subject id={subject.id} title={subject.title} updateState={this.props.updateState}/>
                )}
            </div>
        )
    }
}

export default LeftNav;
import React from 'react';

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
                {this.props.value}
            </button>
        )
    }

    handleClick() {
        this.setState({selectedSubject: this.props.value}, this.updateParentState);
    }

    updateParentState() {
        this.props.updateState(this.state);
    }
}

class LeftNav extends React.Component {
    render() {
        return (
            <div class="btn-group-vertical" role="group" aria-label="Basic example">
                <Subject value="Social Studies" updateState={this.props.updateState}/>
                <Subject value="English Grammer" updateState={this.props.updateState}/>
                <Subject value="English Literature" updateState={this.props.updateState}/>
                <Subject value="Science" updateState={this.props.updateState}/>
                <Subject value="Maths" updateState={this.props.updateState}/>
                <Subject value="Computer" updateState={this.props.updateState}/>
            </div>
        )
    }
}

export default LeftNav;
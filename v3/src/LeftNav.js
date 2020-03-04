import React from 'react';

class Subject extends React.Component {
    render() {
        return (
            <button type="button" class="btn btn-secondary left-nav-button" onClick={() => alert(this.props.value + ' clicked')}>
                {this.props.value}
            </button>
        )
    }
}

class LeftNav extends React.Component {
    render() {
        return (
            <div class="btn-group-vertical" role="group" aria-label="Basic example">
                <Subject value="Social Studies"/>
                <Subject value="English Grammer"/>
                <Subject value="English Literature"/>
                <Subject value="Science"/>
                <Subject value="Maths"/>
                <Subject value="Computer"/>
            </div>
        )
    }
}

export default LeftNav;
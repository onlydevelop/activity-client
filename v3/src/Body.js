import React from 'react';

class Body extends React.Component {
    render() {
        return (
            <div class="row">
                Selected Topic: {this.props.value}
            </div>
        )
    }
}

export default Body;

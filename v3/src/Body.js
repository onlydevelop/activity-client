import React from 'react';
import Question from './Question';

export default class Body extends React.Component {
    render() {
        return (
            <Question value={this.props.value}/>
        )
    }
}

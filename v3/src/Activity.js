import React from 'react';
import LeftNav from './LeftNav';
import Body from './Body';

class Activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSubject: "Please select the subject from left."
        };
        this.updateState = this.updateState.bind(this);
    }

    render() {
        return (
            <div class="row">
                <div class="col-3">
                    <div class="row"><span>&nbsp;</span></div>
                    <div class="row"><LeftNav updateState={this.updateState}/></div>
                </div>
                <div class="col-7">
                    <div class="row"><h2>Welcome to the Activity!</h2></div>
                    <div class="row"><Body value={this.state.selectedSubject}/></div>
                </div>
            </div>
        )
    }

    updateState(_State) {
        this.setState({selectedSubject: _State.selectedSubject})
    }
}

export default Activity;

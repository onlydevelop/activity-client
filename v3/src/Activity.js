import React from 'react';
import LeftNav from './LeftNav';
import Body from './Body';
import TwitterLogin from 'react-twitter-auth';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';

class Activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSubject: "Please select the subject from left.",
            isAuthenticated: false,
            user: null,
            token: ''
        };

        this.updateState = this.updateState.bind(this);
    }

    logout = () => {
        this.setState({
            selectedSubject: "Please select the subject from left.",
            isAuthenticated: false,
            user: null,
            token: ''
        })
    };

    twitterResponse = (e) => {};

    facebookResponse = (e) => {};

    googleResponse = (e) => {};

    onFailure = (error) => {
        alert(error);
    }

    render() {
        let content = !!this.state.isAuthenticated ?
        (
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
        ) : (
            <div>
                <TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter"
                               onFailure={this.twitterResponse} onSuccess={this.twitterResponse}
                               requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"/>
                <FacebookLogin
                    appId="XXXXXXXXXX"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={this.facebookResponse} />
                <GoogleLogin
                    clientId="XXXXXXXXXX"
                    buttonText="Login"
                    onSuccess={this.googleResponse}
                    onFailure={this.googleResponse}
                />
            </div>
        );
        return (
            <div>{content}</div>
        );
    }

    updateState(_State) {
        this.setState({selectedSubject: _State.selectedSubject})
    }
}

export default Activity;

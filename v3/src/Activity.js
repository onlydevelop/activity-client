import React from 'react';
import LeftNav from './LeftNav';

class Activity extends React.Component {
    render() {
        return (
            <div class="row">
                <div class="col-3">
                    <div class="row"><span>&nbsp;</span></div>
                    <div class="row"><LeftNav/></div>
                </div>
                <div class="col-7">
                    <div class="row"><h2>Welcome to the Activity!</h2></div>
                    <div class="row">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
            </div>
        )
    }
}

export default Activity;

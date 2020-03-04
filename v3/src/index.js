import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LeftNav from './LeftNav';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<LeftNav />, document.getElementById('left-nav'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

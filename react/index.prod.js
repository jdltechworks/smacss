import React from 'react'
import ReactDOM from 'react-dom';
import Routings from './base/Router';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const app = document.getElementById('page');

ReactDOM.render(<Routings/>, app);
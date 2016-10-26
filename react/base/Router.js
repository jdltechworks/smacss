import React, { Component } from 'react';
import { 
  hashHistory, 
  browserHistory, 
  Router, 
  Route, 
  IndexRoute } from "react-router";

//React Components

import FrontPage from '../modules/basicPages/FrontPage';
import NotFound from '../modules/Error';
import Layout from './Layout';

class Routings extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute name="front-page" component={FrontPage}></IndexRoute>
        </Route>

        <Route name="not-found" path="*" component={NotFound}></Route>
      </Router>
    );
  }
}

export default Routings;
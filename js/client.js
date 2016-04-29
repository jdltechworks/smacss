import React from 'react'
import ReactDOM from 'react-dom';
import { hashHistory, browserHistory, Router, Route, IndexRoute } from "react-router";

//React Components

import Page  from './react/Page';

import * as modules from './react/modules/Modules';

import Layout from './react/base/Layout';


const app = document.getElementById('app');

export class Routings extends React.Component {

  componentWillMount() {
    let route = [
      {
        id: 1, path: '/dashboard',
        name: 'dashboard',
        component: modules.view.Admin.dashboard
   		},
   		{
        id: 2, path: '/programming',
        name: 'programming',
        component: modules.view.Articles.Programming.index
   		}
    ];
    this.setState(
      {
        router: route
      }
    );
  }
  componentWillUnMount() {

  }
  render() {
    let {router} = this.state;
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Layout}>
          {Page.IndexPage().map((indexpage) => {
            return <IndexRoute key={indexpage.id} name={indexpage.name} onEnter={indexpage.OnEnter} component={indexpage.component} {...indexpage}></IndexRoute>
          }) }
          {Page.Private(router).map((props) => {
            return <Route key={props.id} name={props.name} path={props.path} onEnter={props.onEnter} component={props.component} {...props}></Route>
          }) }
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<Routings/>, app);
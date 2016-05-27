import React from 'react';
import { hashHistory, browserHistory, Router, Route, IndexRoute } from "react-router";

//React Components

import * as m from '../modules';

import Layout from './Layout';

import AccessRestricted  from './AccessRestricted';

export const routes = [
  {
    path: '/case-studies',
    name: 'case-studies',
    menuName: 'Case Studies',
    admin: false,
    menu: true,
    component: m.CaseStudies
  }, 
  {
    path: '/about',
    name: 'about',
    menuName: 'About',
    admin: false,
    menu: true,
    component: m.About
  },
  { 
    path: '/services',
    name: 'services',
    menuName: 'Services',
    admin: false,
    menu: true,
    component: m.Services
  },
  {
    path: '/contact',
    name: 'contact',
    menuName: 'Contact',
    menu: true,
    admin: false,
    component: m.Contact
  },
  {
    path: '/case-studies/:slug',
    name: 'case-studies-by-id',
    admin: false,
    menu: false,
    component: m.CaseStudiesBySlug
  }
];

const restrictedRoutes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    menuName: 'Dashboard',
    menu: true,
    component: m.Dashboard
  }
];

class Routings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basicMenu: routes,
      adminMenu: restrictedRoutes,
      admin: '/admin'
    }
  }
  static childContextTypes = {
    admin: React.PropTypes.string,
    publicMenu: React.PropTypes.array,
    adminMenu: React.PropTypes. array
  };
  getChildContext() {
    return {
      admin: this.state.admin,
      publicMenu: this.state.basicMenu,
      adminMenu: this.state.adminMenu
    }
  }
  render() {
    const { admin } = this.state;
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute name="front-page" component={m.FrontPage}></IndexRoute>
          {routes.map((route, index) => (
            <Route key={index} name={route.name} path={route.path} component={route.component}></Route>
          ))}
        </Route>
        <Route name="access-restricted" path={admin} component={AccessRestricted}>
          {restrictedRoutes.map((route, index) =>(
            <Route key={index} name={route.name} path={admin + route.path} component={route.component}></Route> 
          ))}
        </Route>
      </Router>
    );
  }
}

export default Routings;
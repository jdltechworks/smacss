import React from 'react';
import { 
  hashHistory, 
  browserHistory, 
  Router, 
  Route, 
  IndexRoute } from "react-router";

//React Components

import * as m from '../modules';

import Layout from './Layout';

import AdminAccess  from './AdminAccess';

export const routes = [
  {
    path: '/',
    name: 'landing-page',
    menuName: 'Home',
    admin: false,
    menu: true,
    id: 'home',
    component: m.FrontPage
  },
  {
    path: '/about',
    name: 'about',
    menuName: 'Our Team',
    admin: false,
    menu: true,
    component: m.About
  },
  { 
    path: '/services',
    name: 'services-page',
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
    path: '/login',
    name: 'login',
    admin: false,
    menu: false,
    component: m.Login
  }
];

const restrictedRoutes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    menuName: 'Dashboard',
    menu: true,
    component: m.Dashboard
  },
  {
    path: '/articles/:id/edit',
    name: 'edit-articles',
    menu: false,
    component: m.EditArticle
  },
  {
    path: '/articles/add',
    name: 'add-articles',
    menu: false,
    component: m.AddArticle
  },
  {
    path: '/articles',
    name: 'articles',
    menuName: 'Articles',
    menu: true,
    component: m.AdminArticles
  },
  {
    path: '/case-studies',
    name: 'all-case-studies',
    menuName: 'Case Studies',
    menu: true,
    component: m.AdminCaseStudies
  },
  {
    path: '/case-studies/:id/edit',
    name: 'edit-articles',
    menu: false,
    component: m.EditCaseStudy
  },
  {
    path: '/case-studies/add',
    name: 'add-case-study',
    menu: false,
    component: m.AddCaseStudy
  }
];

class Routings extends React.Component {
  
  static childContextTypes = {
    admin: React.PropTypes.string,
    publicMenu: React.PropTypes.array,
    adminMenu: React.PropTypes. array
  };

  constructor(props) {
    super(props);
    this.state = {
      basicMenu: routes,
      adminMenu: restrictedRoutes,
      admin: '/admin'
    }
  }
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
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute name="front-page" component={m.FrontPage}></IndexRoute>
        </Route>

        <Route name="not-found" path="*" component={m.NotFound}></Route>
      </Router>
    );
  }
}

export default Routings;
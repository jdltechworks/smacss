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
    menuName: 'The Crew',
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
    menu: false,
    component: m.AdminArticles
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
          {routes.map((route, index) => (
            <Route key={index} name={route.name} path={route.path} component={route.component}></Route>
          ))}
        </Route>
        <Route name="admin-access" path={admin} component={AdminAccess}>
          {restrictedRoutes.map((route, index) =>(
            <Route key={index} name={route.name} onEnter={route.onEnter} path={admin + route.path} component={route.component}></Route> 
          ))}
        </Route>
      </Router>
    );
  }
}

export default Routings;
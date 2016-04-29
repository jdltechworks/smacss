import * as modules from './modules/Modules';
import { hashHistory, browserHistory, Router, Route, IndexRoute } from "react-router";
import React from 'react';
export class PageController {
  constructor() {
    
  }

  Private(pages) {
    this.pages = [];
    
    pages.map((route) => {
      this.pages.push({ 
        name: route.name, 
        id: route.id, component: 
        route.component, 
        path: route.path, 
        onEnter: this.checkAuth.bind(this)
      });
    });
    
    return this.pages;
  }

  checkAuth(nextState, replace, next) {
    next();
  }
  Public(page) {
    this.pages = [];
    this.pages.push({ page });
    console.log(this.pages);
    return this.pages;
  }

  IndexPage() {
    this.defaultPage = [];
    let FrontPage = {
      id: 1,
      name: 'FrontPage',
      component: modules.view.FrontPage,
      onEnter: this.setIndexPage
    }

    this.defaultPage.push(FrontPage);
    return this.defaultPage;
  }

  setIndexPage(nextState, replace) {
    
  }
}


const Page = new PageController;

export default Page;

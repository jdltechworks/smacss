import React from 'react';
import { Link } from "react-router";

export default class AdminMenu extends React.Component {
  static contextTypes = {
    adminMenu: React.PropTypes.array,
    admin: React.PropTypes.string
  }
  render() {
    let { admin, adminMenu } = this.context;
    return (
      <header class="header">
        <div class="inner">
          <nav class="navbar">
            <div class="navbar--brand">
              <a href="#"><img src="/img/logo.png" alt="JDLtechworks Logo" /></a>
            </div>
            <div class="navbar--menu">
              <ul>
                {adminMenu.map((menu, key) => (
                  <li key={key}>
                    { menu.menuName !== undefined ? <Link to ={ admin + menu.path}>{menu.menuName}</Link> : ''}
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
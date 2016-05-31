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
              <Link to="/admin"><img src="/img/logo.png" alt="JDLtechworks Logo" /></Link>
            </div>
            <div class="navbar--menu">
              <ul>
                {adminMenu.map((menu, key) => (
                  <li key={key}>
                    { menu.menu ? <Link to ={ admin + menu.path}>{menu.menuName}</Link> : ''}
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
import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {

  _authenticate(e) {
    e.preventDefault();
    console.log(this.refs);
  }
  render() {
    return(
      <section className="login">
        <h2>Login</h2>
        <form onSubmit={this._authenticate.bind(this)}>
          <div class="userName">
            <input type="text" ref="username" name="username" />
            <input type="password" ref="password" name="password" />
            <button className="button success">Login</button>
          </div>
        </form>
      </section>
      );
  }
}
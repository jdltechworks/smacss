import React from 'react';
import AdminMenu from './components/AdminMenu';
import Footer from './components/Footer';
import { browserHistory } from 'react-router';

export default class AdminAccess extends React.Component {
  static contextTypes = {
    admin: React.PropTypes.string
  };
  static childContext
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: true
    };
  }
  getChildContext() {
  }
  componentWillMount() {
    let { admin } = this.context;
    let { isAdmin } = this.state;
    !isAdmin ? browserHistory.push('/login') : '';
  }
  checkAuth() {

  }
  render() {
    return (
      <div class="page-inner admin">
        <AdminMenu />
        {this.props.children}
      </div>
      );
  }
}
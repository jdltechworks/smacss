import React from 'react';
import AdminMenu from './components/AdminMenu';
import Footer from './components/Footer';
import { hashHistory } from 'react-router';

export default class AdminAccess extends React.Component {
  static contextTypes = {
    admin: React.PropTypes.string
  };
  static childContext
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false
    };
  }
  getChildContext() {
  }
  componentWillMount() {
    let { isAdmin } = this.state;
    let { admin } = this.context;
    !isAdmin ? browserHistory.push('/login') : browserHistory.push(admin+'/dashboard');
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
import React from 'react';
import AdminMenu from './components/AdminMenu';
import Footer from './components/Footer';
import { hashHistory } from 'react-router';

export default class AccessRestricted extends React.Component {
  static childContextTypes = {

  };
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
    if(!isAdmin) {
      hashHistory.push('/');
    } else {
      hashHistory.push('/admin/dashboard');
    }
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
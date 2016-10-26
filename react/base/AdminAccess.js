import React from 'react';
import AdminMenu from './components/AdminMenu';
import Footer from './components/Footer';
import { browserHistory } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { lightGreen600, lightGreen700, lightGreen100  } from 'material-ui/styles';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: lightGreen600,
    primary2Color: lightGreen700,
    primary3Color: lightGreen100,
  },
}, {
  avatar: {
    borderColor: null,
  }
});

export default class AdminAccess extends React.Component {
  static contextTypes = {
    admin: React.PropTypes.string
  };
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
      <MuiThemeProvider muiTheme={muiTheme}>
        <div class="page-inner">
          
            <AdminMenu {...props}/>
            {this.props.children}
        </div>
      </MuiThemeProvider>
      );
  }
}
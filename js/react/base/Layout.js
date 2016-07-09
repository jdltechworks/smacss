import React from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
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

export default class Layout extends React.Component {
	render() {
		let { props } = this;
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div className="page--inner">
					<Menu {...props}/>
						{this.props.children}
				</div>
			</MuiThemeProvider>
		); 
	}
}
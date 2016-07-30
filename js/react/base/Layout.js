import React from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { lightGreen600, lightGreen700, lightGreen100  } from 'material-ui/styles';
import * as m from '../modules';

let {
	FrontPage,
	About,
	Services,
	Contact
} = m;

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
	static childContextTypes = {
		onScrollActive: React.PropTypes.func
	};
	constructor(props) {
		super(props);
	}
	render() {
		let { props } = this;
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div className="page--inner">
					<Menu {...props}/>
					<FrontPage {...props}/>
					<About {...props}/>
					<Services {...props}/>
					<Contact {...props}/>
				</div>
			</MuiThemeProvider>
		); 
	}
}
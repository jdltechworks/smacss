import React from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';

export default class Layout extends React.Component {
	render() {
		return (
				<div class="page-inner">
					<Menu />
					{this.props.children}
				</div>
		); 
	}
}
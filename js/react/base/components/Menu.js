import React from 'react';
import { Link } from "react-router";

export default class Menu extends React.Component {
	static contextTypes = {
		publicMenu: React.PropTypes.array
	}
	render() {
		let { publicMenu } = this.context;
		console.log(this.props);
		return (
	    <header class="header">
	      <div class="inner">
	        <nav class="navbar">
	          <div class="navbar--brand">
	            <Link to="/"><img src="/img/logo.png" alt="JDLtechworks Logo" /></Link>
	          </div>
	          <div class="navbar--menu">
	            <ul>
	            	<li><Link to="/">Home</Link></li>
	            	{publicMenu.map((menu, key) => (
	            		<li key={key}>
	            			{ menu.menu ? <Link to ={menu.path} activeClassName="active">{menu.menuName}</Link> : ''}
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
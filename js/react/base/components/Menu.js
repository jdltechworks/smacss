import React from 'react';
import { Link } from "react-router";

export default class Menu extends React.Component {
	static contextTypes = {
		publicMenu: React.PropTypes.array
	}
	render() {
		let { publicMenu } = this.context;
		return (
	    <header class="header">
	      <div class="inner">
	        <nav class="navbar">
	          <div class="navbar--brand">
	            <a href="/"><img src="/img/logo.png" alt="JDLtechworks Logo" /></a>
	          </div>
	          <div class="navbar--menu">
	            <ul>
	            	<li><Link to="/">Home</Link></li>
	            	{publicMenu.map((menu, key) => (
	            		<li key={key}>
	            			{ menu.menu ? <Link to ={menu.path}>{menu.menuName}</Link> : ''}
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
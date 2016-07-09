import React from 'react';
import { Link } from "react-router";

export default class Menu extends React.Component {
	static contextTypes = {
		publicMenu: React.PropTypes.array
	}
	hoverEffect(e) {
		document.querySelector('li.magic-line').style.left = e.currentTarget.offsetLeft + 'px';
		document.querySelector('li.magic-line').style.width = e.currentTarget.offsetWidth + 'px';
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
	            	<li onMouseEnter={this.hoverEffect.bind(this)}><Link to="/">Home</Link></li>
	            	{publicMenu.map((menu, key) => {
	            		return menu.menu ? <li key={key} onMouseEnter={this.hoverEffect.bind(this)}> <Link to ={menu.path} activeClassName="active">{menu.menuName}</Link></li>: '';
	            	})}
	            	<li className="magic-line"></li>
	            </ul>
	          </div>
	        </nav>
	      </div>
	    </header>
		);
	}
}
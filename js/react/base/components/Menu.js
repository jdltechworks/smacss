import React from 'react';
import { Link } from "react-router";
import $ from 'jquery';

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
	            <Link to="/"><img src="/img/logo.png" alt="JDLtechworks Logo" /></Link>
	          </div>
	          <div class="navbar--menu">
	            <ul>
	            	<li onMouseEnter={this.hoverEffect.bind(this)} onClick={toScroll.bind(this, 'landing-page')}><Link to="/">Home</Link></li>
	            	{publicMenu.map((menu, key) => {
	            		return menu.menu ? <li key={key} onClick={toScroll.bind(this, menu.name)}> <a href="#">{menu.menuName}</a></li>: '';
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

const	toScroll = (content, e) => {
	e.preventDefault();
	let targetY = document.getElementById(content).offsetTop;
	$('html,body').animate({
	  scrollTop: targetY - 76
	}, 378, 'swing');
	document.querySelector('li.magic-line').style.left = e.currentTarget.offsetLeft + 'px';
	document.querySelector('li.magic-line').style.width = e.currentTarget.offsetWidth + 'px';
};
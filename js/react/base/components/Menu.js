import React from 'react';
import { Link } from "react-router";
import $ from 'jquery';
import _ from 'lodash';

export default class Menu extends React.Component {
	static contextTypes = {
		publicMenu: React.PropTypes.array
	}
	componentDidMount() {
		document
			.querySelector('li.magic-line')
				.style.left 
					= document.getElementById('home').offsetLeft + 'px';
		document
			.querySelector('li.magic-line')
				.style.width 
					= document.getElementById('home').offsetWidth + 'px';
		window.onscroll = this.scrollListener.bind(this);
	}
	scrollListener(e) {
		let { publicMenu } = this.context;
		let withMenu = _.filter(publicMenu, { menu: true});
		for ( var collection of withMenu ) {
			let el = document.getElementById(collection.name);
			if(_.gte(_.round(window.pageYOffset), el.offsetTop - 90)) {
				let link = document.querySelector(`a.${collection.name}`);
				document.querySelector('li.magic-line').style.left = link.offsetLeft + 'px'; 
				document.querySelector('li.magic-line').style.width = link.offsetWidth + 'px';
			}
		}

	}
	render() {
		let { publicMenu } = this.context;
		return (
	    <header class="header">
	      <div class="inner">
	        <nav class="navbar">
	        	<div className="navbar--wrapper">
		          <div class="navbar--brand">
		            <Link to="/"><img src="/img/logo.png" alt="JDLtechworks Logo" /></Link>
		          </div>
		          <div class="navbar--menu">
		            <ul>
		            	{publicMenu.map((menu, key) => {
		            		return menu.menu ? <li id={ menu.id ? menu.id: null } key={key}><a href="#" onClick={toScroll.bind(this, menu.name)} className={`${menu.name}`}>{menu.menuName}</a></li>: '';
		            	})}
		            	<li className="magic-line"></li>
		            </ul>
		          </div>
	          </div>
	        </nav>
	      </div>
	    </header>
		);
	}
}

export const	toScroll = (content, e) => {
	e.preventDefault();
	$(`.navbar--menu ul li a`).removeClass('active');
	$(`.${content}`).addClass('active');
	let targetY = document.getElementById(content).offsetTop - 89;
	$('html,body').animate({
	  scrollTop: targetY
	}, 600, 'swing');
};
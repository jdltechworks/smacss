import React from 'react';
import { Link } from "react-router";
import $ from 'jquery';
import _ from 'lodash';
import logo from '../../../assets/img/logo.png';

export default class Menu extends React.Component {
	scrollListener(e) {
		let name = e.currentTarget.className;	
		let el = document.getElementById(name);
		console.log(name);
		console.log(el);
		if(_.gte(_.round(window.pageYOffset), el.offsetTop - 90)) {
			let link = document.querySelector(`a.${name}`);
			$('.navbar--menu ul li a').removeClass('active');
			link.classList.add('active');
			document.querySelector('li.magic-line').style.left = link.offsetLeft + 'px'; 
			document.querySelector('li.magic-line').style.width = link.offsetWidth + 'px';
		}
	}
	render() {
		return (
	    <header className="header">
	      <div className="inner">
	        <nav className="navbar">
	        	<div className="navbar--wrapper">
		          <div className="navbar--brand">
		            <Link to="/"><img src={logo} alt="JDLtechworks Logo" /></Link>
		            <a href="#" className="navbar--mobile-nav" onClick={_toggleMenu.bind(this)}><i className="fa fa-bars fa-2"></i></a>
		          </div>
		          <div className="navbar--menu">
		            <ul>
		            	<li id="home">
		            		<a href="#" onClick={toScroll.bind(this, 'landing-page')} className="landing-page">Home</a>
		            	</li>
		            	<li>
		            		<a href="#" onClick={toScroll.bind(this, 'about')} className="about">About</a>
		            	</li>
		            	<li>
		            		<a href="#" onClick={toScroll.bind(this, 'services-page')} className="services-page">Services</a>
		            	</li>
		            	<li>
		            		<a href="#" onClick={toScroll.bind(this, 'contact')} className="contact">Contact</a>
		            	</li>
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

const _toggleMenu = (e) => {
	e.preventDefault();
	$('.navbar--menu').slideToggle('fast');
};

export const	toScroll = (content, e) => {
	e.preventDefault();
	let isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	document.body.offsetWidth <= 724 ? $('.navbar--menu').slideUp() : null;
	let targetY = document.getElementById(content).offsetTop - 89;
	$('html,body').animate({
	  scrollTop: targetY
	}, 600, 'swing');
	$('.navbar--menu ul li a').removeClass('active');
	let link = document.querySelector(`a.${content}`);
	link.classList.add('active');
	document.querySelector('li.magic-line').style.left = link.offsetLeft + 'px'; 
	document.querySelector('li.magic-line').style.width = link.offsetWidth + 'px';

};
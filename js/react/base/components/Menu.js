import React from 'react';
import { Link } from "react-router";

export default class Menu extends React.Component {
	render() {
		return (
	    <header class="header">
	      <div class="inner">
	        <nav class="navbar">
	          <div class="navbar--brand">
	            <a href="#"><img src="/img/logo.png" alt="JDLtechworks Logo" /></a>
	          </div>
	          <div class="navbar--menu">
	            <ul>
	              <li><Link to="/">Home</Link></li>
	              <li><Link to="/programming">Programming</Link></li>
	              <li><Link to="/about">About</Link></li>
	              <li><Link to="/services">Services</Link></li>
	              <li><Link to="/Contact">Contact</Link></li>
	            </ul>
	          </div>
	        </nav>
	      </div>
	    </header>
		); 
	}
}
import React from 'react';

export default class Menu extends React.Component {
	render() {
		return (
	    <header class="header">
	      <div class="inner">
	        <nav class="navbar">
	          <div class="navbar--brand">
	            <a href="#"><img src="/img/logo.svg" alt="JDLtechworks Logo" /></a>
	          </div>
	          <div class="navbar--menu">
	            <ul>
	              <li><a href="#">Home</a></li>
	              <li><a href="#/programming">Programming</a></li>
	              <li><a href="#">About</a></li>
	              <li><a href="#">Services</a></li>
	              <li><a href="#">Contact</a></li>
	            </ul>
	          </div>
	        </nav>
	      </div>
	    </header>
		); 
	}
}
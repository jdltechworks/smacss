import React from 'react';

export default class Footer extends React.Component {
	render() {
		return(
			<footer class="footer">
			  <div class="inner">
			    <div class="footer--cols4">
			      <div class="footer--branding">
			        <a href="#"><img src="/img/logo.png" alt="Footer Logo" /></a>
			        <p class="copyright">&copy; Copyright 2016. JDLtechworks all rights reserved</p>
			      </div>
			    </div>
			    <div class="footer--cols4">
			    </div>
			    <div class="footer--cols4">
			      <div class="footer--social-icons">
			        <div class="social--icons">
			          <ul>
			            <li><a href="http://facebook.com/jdltechworks" target="_blank"><img src="img/social/facebook.png" alt="" class="facebook" /></a></li>
			            <li><a href="http://twitter.com/jdltechworks" target="_blank"><img src="img/social/twitter.png" alt="" class="twitter" /></a></li>
			            <li><a href="http://github.com/jdltechworks" target="_blank"><img src="img/social/github.png" alt="" class="github" /></a></li>
			          </ul>
			        </div>
			      </div>
			    </div>
			  </div>
			</footer>
		);
	}
}
import React from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends React.Component {
	render() {
		return(
		  <div class="inner">
		    <div class="footer--cols4">
		      <div class="footer--branding">
		        <a href="#"><img src="/img/footer-logo.png" alt="Footer Logo" /></a>
		        <p class="copyright">&copy; Copyright 2016. JDLtechworks all rights reserved</p>
		      </div>
		    </div>
		    <div class="footer--cols4">
		    </div>
		    <div class="footer--cols4">
		      <div class="footer--social-icons">
		        <div class="social--icons">
              <ul class="social social-circle">
                <li><a href="//www.twitter.com/jdltechworks"><i class="fa fa-twitter"></i></a></li>
                <li><a href="//www.facebook.com/jdltechworks"><i class="fa fa-facebook"></i></a></li>
                <li><a href="//www.github.com/jdltechworks"><i class="fa fa-github"></i></a></li>
              </ul>
		        </div>
		      </div>
		    </div>
		  </div>
		);
	}
}

const footer = document.getElementById('footer');

ReactDOM.render(<Footer />, footer);
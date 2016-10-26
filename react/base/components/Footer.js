import React from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends React.Component {
	render() {
		return(
		  <div className="inner">
		    <div className="footer--cols4">
		      <div className="footer--branding">
		        <a href="#"><img src="/img/footer-logo.png" alt="Footer Logo" /></a>
		        <p className="copyright">&copy; Copyright 2016. JDLtechworks all rights reserved</p>
		      </div>
		    </div>
		    <div className="footer--cols4">
		    </div>
		    <div className="footer--cols4">
		      <div className="footer--social-icons">
		        <div className="social--icons">
              <ul className="social social-circle">
                <li><a href="//www.twitter.com/jdltechworks"><i className="fa fa-twitter"></i></a></li>
                <li><a href="//www.facebook.com/jdltechworks"><i className="fa fa-facebook"></i></a></li>
                <li><a href="//www.github.com/jdltechworks"><i className="fa fa-github"></i></a></li>
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
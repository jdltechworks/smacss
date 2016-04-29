import React from 'react';

export default class Footer extends React.Component {
	render() {
		return(
			<footer class="footer">
			  <div class="inner">
			    <div class="footer--cols4">
			      <div class="footer--branding">
			        <a href="#"><img src="img/footer-logo.png" alt="Footer Logo" /></a>
			        <p class="copyright">&copy; Copyright 2016. JDLtechworks all rights reserved</p>
			      </div>
			      <div class="footer--social-icons">
			        <div class="social--icons">
			          <ul>
			            <li><a href=""><img src="img/social/facebook.png" alt="" class="facebook" /></a></li>
			            <li><a href=""><img src="img/social/linkedin.png" alt="" class="linkedin" /></a></li>
			            <li><a href=""><img src="img/social/twitter.png" alt="" class="twitter" /></a></li>
			            <li><a href=""><img src="img/social/github.png" alt="" class="github" /></a></li>
			          </ul>
			        </div>
			      </div>
			    </div>
			    <div class="footer--cols4">
			      <div class="footer--about">
			        <h2>About Us</h2>
			        <p>Ut facilisis interdum dolor in dignissim. Nunc tincidunt risus placerat accumsan aliquet. Nunc semper velit urna, id aliquam massa feugiat eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin metus lectus, dapibus eget commodo non, lacinia in metus. Vivamus pharetra neque eu semper tristique.</p> 
			      </div>
			    </div>
			    <div class="footer--cols4">
			      <div class="footer--newsletter-form">
			        <form action="#" class="newsletter">
			          <label for="email"><h2>Sign up for our newsletter</h2></label>
			          <input name="email" type="email" placeholder="Email" />
			          <div class="form--submit">
			            <button class="button success">Submit</button>
			          </div>
			        </form>
			      </div>
			    </div>
			  </div>
			</footer>
		);
	}
}
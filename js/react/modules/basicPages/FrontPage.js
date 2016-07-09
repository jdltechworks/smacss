import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class FrontPage extends React.Component {
	render() {
		return(
			<div>
	    <section className="highlighted">
	      <div className="inner">
        <ReactCSSTransitionGroup
          component="section"
          transitionName="route"
          className="hero-unit landing"
          transitionEnterTimeout={600}
          transitionAppearTimeout={600}
          transitionLeaveTimeout={400}
          transitionAppear={true}
        >
	          <h1>Your <span className="slash">Ideas</span> Our Design <span className="slash"> &lt; / &gt; </span> Code</h1>
	          <h2>Using the Latest and Mostly Used Platform</h2>
	        </ReactCSSTransitionGroup>
	      </div>
	    </section>
        <ReactCSSTransitionGroup
          component="section"
          transitionName="route"
          className="work-elements"
          transitionEnterTimeout={600}
          transitionAppearTimeout={600}
          transitionLeaveTimeout={400}
          transitionAppear={true}
        >
	    <div className="work-elements-inner clearfix">
	    	<div class="col-3">
	    		<center>
		    		<h2>
		    			<i class="fa fa-lightbulb-o" aria-hidden="true"></i>
		    		</h2>
	    			<h4>Plan</h4>
	    		</center>
	    		<p>
	    			Check your business model and the very best materials and marketing strategies for your web or mobile app.
	    		</p>
	    	</div>
	    	<div class="col-3">
	    		<center>
		    		<h2>
		    			<i class="fa fa-wrench" aria-hidden="true"></i>
		    			<h4>Develop</h4>
		    		</h2>
	    		</center>

	    		<p>
	    			Develop and test the quality of your application.
	    		</p>
	    	</div>

	    	<div class="col-3">
	    		<center>
		    		<h2>
		    			<i class="fa fa-rocket" aria-hidden="true"></i>
		    			<h4>Launch</h4>
		    		</h2>
	    		</center>

	    		<p>
	    			Launch the mobile application to your preferred or our best option for your application.
	    		</p>
	    	</div>
	    </div>
	    </ReactCSSTransitionGroup>
	    <section className="main">
	      <div className="inner">
	        <div className="articles">
	          <div className="articles--header">
	            <h1>Latest Articles</h1>
	            <h2 className="slash"> &lt; / &gt; </h2>
	          </div>
	          <div className="articles--main">
	            <div className="inner">
	              <div className="row odd">
	                <div className="article--category">
	                <div className="article">
	                	<h2><a href="">Aliquam in malesuada felis. Morbi egestas interdum condimentum.</a></h2>
	                	<p>Donec placerat enim vel arcu pharetra convallis. Nulla facilisi. Curabitur congue semper velit in ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum pulvinar nisi vitae porta gravida. Morbi aliquam magna et turpis efficitur, eu sollicitudin leo vestibulum. Donec sit amet ipsum et est accumsan varius non ut enim. Aenean magna magna, mattis vitae volutpat non, pulvinar at nunc.</p>
	                	<a href="#">Read more</a>
	                </div>
	                <div className="article">
	                	<h2><a href="">Aliquam in malesuada felis. Morbi egestas interdum condimentum.</a></h2>
	                	<p>Donec placerat enim vel arcu pharetra convallis. Nulla facilisi. Curabitur congue semper velit in ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum pulvinar nisi vitae porta gravida. Morbi aliquam magna et turpis efficitur, eu sollicitudin leo vestibulum. Donec sit amet ipsum et est accumsan varius non ut enim. Aenean magna magna, mattis vitae volutpat non, pulvinar at nunc.</p>
	                	<a href="#">Read more</a>
	                </div>
	                <div className="article">
	                	<h2><a href="">Aliquam in malesuada felis. Morbi egestas interdum condimentum.</a></h2>
	                	<p>Donec placerat enim vel arcu pharetra convallis. Nulla facilisi. Curabitur congue semper velit in ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum pulvinar nisi vitae porta gravida. Morbi aliquam magna et turpis efficitur, eu sollicitudin leo vestibulum. Donec sit amet ipsum et est accumsan varius non ut enim. Aenean magna magna, mattis vitae volutpat non, pulvinar at nunc.</p>
	                	<a href="#">Read more</a>
	                </div>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	    </section>
	    </div>
		);
	}
}
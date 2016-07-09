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
	    			Check your business model and use the very best materials and marketing strategies for your web or mobile app.
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
	    			Develop and test then deliver the best quality of the application.
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
	    			Launch the application to your preferred or provide the best server for your application.
	    		</p>
	    	</div>
	    </div>
	    </ReactCSSTransitionGroup>
	    <section className="main">
	      <div className="inner">
	      </div>
	    </section>
	    </div>
		);
	}
}
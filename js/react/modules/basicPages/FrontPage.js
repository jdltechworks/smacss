import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import RaisedButton from 'material-ui/RaisedButton';
import { toScroll } from '../../base/components/Menu';

export default class FrontPage extends React.Component {
	render() {
		return(
			<div id="landing-page" className="landing--page front-page">
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
	          <center>
	          	<a className="hero-unit-btn" href="#" onClick={toScroll.bind(this, 'contact')}>LEARN MORE</a>
	        	</center>
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
		    <div className="work-elements--headings">
		    	<div className="work-elements--headings-inner">
		    		<h2>HOW <span>WE WORK</span></h2>
		    	</div>
		    </div>
	    	<div class="col-4">
	    		<center>
		    		<h2>
		    			<i class="fa fa-lightbulb-o" aria-hidden="true"></i>
		    			<h4>Plan</h4>
		    		</h2>
	    		</center>
	    		<p>
	    			Check your business model and use the very best materials and marketing strategies for your web or mobile app.
	    		</p>
	    	</div>
	    	<div class="col-4">
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

	    	<div class="col-4">
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
	    <div className="banner--inquiry">
	    	<div className="inner">
	    		<div className="col-8">
	    			<h2>Want a modern website using the latest platform?</h2>
	    			<p>Curabitur nunc orci, aliquet vitae odio eu, euismod consequat ipsum. Nam urna leo, dignissim quis risus ut, consequat mollis erat.</p>
	    		</div>
	    		<div className="col-4">
	    			<a href="#" onClick={toScroll.bind(this, 'contact')}>CONTACT US NOW</a>
	    		</div>
	    	</div>
	    </div>
	    </ReactCSSTransitionGroup>
	    </div>
		);
	}
}
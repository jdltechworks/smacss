import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class Services extends React.Component {
	render() {
		return (
      <section className="main">
        <div className="main--headings">
          <div className="main--headings-inner">
            <h2>Services</h2>
          </div>
        </div>
				<div className="main--inner">
					<ReactCSSTransitionGroup
          component="div"
          transitionName="route"
          className="main-content"
          transitionEnterTimeout={600}
          transitionAppearTimeout={600}
          transitionLeaveTimeout={400}
          transitionAppear={true}
        >
            <div className="services--container">
              <div className="services">
                <h2>UX Design</h2>
                <p>Curabitur nunc orci, aliquet vitae odio eu, euismod consequat ipsum. Nam urna leo, dignissim quis risus ut, consequat mollis erat. Duis nisl risus, ultricies nec lobortis non, euismod id sapien. Donec sodales venenatis viverra. Nulla accumsan libero pulvinar lobortis tristique. Nam at tristique tellus, vel efficitur ex. Sed sollicitudin, augue vitae volutpat faucibus, dolor risus blandit sapien, sit amet tincidunt est arcu facilisis tortor. Nulla non dui nec magna tempor interdum sit amet id risus.</p>
              </div>
              <div className="services">
                <h2>Web Design</h2>
                <p>Curabitur nunc orci, aliquet vitae odio eu, euismod consequat ipsum. Nam urna leo, dignissim quis risus ut, consequat mollis erat. Duis nisl risus, ultricies nec lobortis non, euismod id sapien. Donec sodales venenatis viverra. Nulla accumsan libero pulvinar lobortis tristique. Nam at tristique tellus, vel efficitur ex. Sed sollicitudin, augue vitae volutpat faucibus, dolor risus blandit sapien, sit amet tincidunt est arcu facilisis tortor. Nulla non dui nec magna tempor interdum sit amet id risus.</p>
              </div>
              <div className="services">
                <h2>PSD to AngularJS</h2>
                <p>Curabitur nunc orci, aliquet vitae odio eu, euismod consequat ipsum. Nam urna leo, dignissim quis risus ut, consequat mollis erat. Duis nisl risus, ultricies nec lobortis non, euismod id sapien. Donec sodales venenatis viverra. Nulla accumsan libero pulvinar lobortis tristique. Nam at tristique tellus, vel efficitur ex. Sed sollicitudin, augue vitae volutpat faucibus, dolor risus blandit sapien, sit amet tincidunt est arcu facilisis tortor. Nulla non dui nec magna tempor interdum sit amet id risus.</p>
              </div>
              <div className="services">
                <h2>PSD to ReactJS</h2>
                <p>Curabitur nunc orci, aliquet vitae odio eu, euismod consequat ipsum. Nam urna leo, dignissim quis risus ut, consequat mollis erat. Duis nisl risus, ultricies nec lobortis non, euismod id sapien. Donec sodales venenatis viverra. Nulla accumsan libero pulvinar lobortis tristique. Nam at tristique tellus, vel efficitur ex. Sed sollicitudin, augue vitae volutpat faucibus, dolor risus blandit sapien, sit amet tincidunt est arcu facilisis tortor. Nulla non dui nec magna tempor interdum sit amet id risus.</p>
              </div>
              <div className="services">
                <h2>PSD to AngularJS Full Stack</h2>
                <p>Curabitur nunc orci, aliquet vitae odio eu, euismod consequat ipsum. Nam urna leo, dignissim quis risus ut, consequat mollis erat. Duis nisl risus, ultricies nec lobortis non, euismod id sapien. Donec sodales venenatis viverra. Nulla accumsan libero pulvinar lobortis tristique. Nam at tristique tellus, vel efficitur ex. Sed sollicitudin, augue vitae volutpat faucibus, dolor risus blandit sapien, sit amet tincidunt est arcu facilisis tortor. Nulla non dui nec magna tempor interdum sit amet id risus.</p>
              </div>
              <div className="services">
                <h2>PSD to  ReactJS Full Stack</h2>
                <p>Curabitur nunc orci, aliquet vitae odio eu, euismod consequat ipsum. Nam urna leo, dignissim quis risus ut, consequat mollis erat. Duis nisl risus, ultricies nec lobortis non, euismod id sapien. Donec sodales venenatis viverra. Nulla accumsan libero pulvinar lobortis tristique. Nam at tristique tellus, vel efficitur ex. Sed sollicitudin, augue vitae volutpat faucibus, dolor risus blandit sapien, sit amet tincidunt est arcu facilisis tortor. Nulla non dui nec magna tempor interdum sit amet id risus.</p>
              </div>
            </div>
          </ReactCSSTransitionGroup>
				</div>
      </section>
		);
	}
}
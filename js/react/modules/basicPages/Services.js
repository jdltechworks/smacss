import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class Services extends React.Component {
	render() {
		return (
      <section id="services-page" className="main services-page">
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
              <div class="col-12 contact--headings">
                <h2><i class="fa fa-cogs"></i></h2>
                <p>Curabitur nunc orci, aliquet vitae odio eu, euismod consequat ipsum. Nam urna leo, dignissim quis risus ut, consequat mollis erat. Duis nisl risus, ultricies nec lobortis non, euismod id sapien. Donec sodales venenatis viverra. Nulla accumsan </p>
              </div>
              <div className="services">
                <i className="icon-directions icons"></i>
                <h2>UX Design</h2>
                <p>Curabitur nunc orci, aliquet vitae odio eu, euismod consequat ipsum. Nam urna leo, dignissim quis risus ut, consequat mollis erat. Duis nisl risus, ultricies nec lobortis non, euismod id sapien. Donec sodales venenatis viverra. Nulla accumsan libero pulvinar lobortis tristique. Nam at tristique tellus, vel efficitur ex. Sed sollicitudin, augue vitae volutpat faucibus, dolor risus blandit sapien, sit amet tincidunt est arcu facilisis tortor. Nulla non dui nec magna tempor interdum sit amet id risus.</p>
              </div>
              <div className="services">
                <i className="icon-screen-desktop icons"></i>
                <h2>Web Design</h2>
                <p>Curabitur nunc orci, aliquet vitae odio eu, euismod consequat ipsum. Nam urna leo, dignissim quis risus ut, consequat mollis erat. Duis nisl risus, ultricies nec lobortis non, euismod id sapien. Donec sodales venenatis viverra. Nulla accumsan libero pulvinar lobortis tristique. Nam at tristique tellus, vel efficitur ex. Sed sollicitudin, augue vitae volutpat faucibus, dolor risus blandit sapien, sit amet tincidunt est arcu facilisis tortor. Nulla non dui nec magna tempor interdum sit amet id risus.</p>
              </div>
              <div className="services">
                <i className="icon-globe-alt icons"></i>
                <h2>Web Development</h2>
                <p>Curabitur nunc orci, aliquet vitae odio eu, euismod consequat ipsum. Nam urna leo, dignissim quis risus ut, consequat mollis erat. Duis nisl risus, ultricies nec lobortis non, euismod id sapien. Donec sodales venenatis viverra. Nulla accumsan libero pulvinar lobortis tristique. Nam at tristique tellus, vel efficitur ex. Sed sollicitudin, augue vitae volutpat faucibus, dolor risus blandit sapien, sit amet tincidunt est arcu facilisis tortor. Nulla non dui nec magna tempor interdum sit amet id risus.</p>
              </div>
              <div className="services">
                <i className="icon-puzzle icons"></i>
                <h2>Internet Marketing</h2>
                <p>Curabitur nunc orci, aliquet vitae odio eu, euismod consequat ipsum. Nam urna leo, dignissim quis risus ut, consequat mollis erat. Duis nisl risus, ultricies nec lobortis non, euismod id sapien. Donec sodales venenatis viverra. Nulla accumsan libero pulvinar lobortis tristique. Nam at tristique tellus, vel efficitur ex. Sed sollicitudin, augue vitae volutpat faucibus, dolor risus blandit sapien, sit amet tincidunt est arcu facilisis tortor. Nulla non dui nec magna tempor interdum sit amet id risus.</p>
              </div>
            </div>
          </ReactCSSTransitionGroup>
				</div>
      </section>
		);
	}
}
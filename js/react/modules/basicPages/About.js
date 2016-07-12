import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
export default class About extends React.Component {
	render() {
		return (
      <section className="main">
        <div className="main--banner clearfix">
          <img src="//placeimg.com/1000/582/tech" />
        <ReactCSSTransitionGroup
          component="div"
          transitionName="route"
          className="main--banner-content"
          transitionEnterTimeout={600}
          transitionAppearTimeout={600}
          transitionLeaveTimeout={400}
          transitionAppear={true}
        >
        <div className="main--banner-content-inner">
            <h2>The Crew</h2>
            <p>is the master mind of dope warfare Curabitur non lectus tellus. Aenean a augue facilisis, dignissim odio ac, commodo arcu. Sed nec ultrices erat, in porttitor leo. Donec non arcu sed dui sagittis mollis eget quis metus. Ut tempor sit amet ipsum vel congue. Nunc fermentum purus sem, et placerat mauris malesuada non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed et tellus at quam sodales mollis. Fusce mi ipsum, ultricies non molestie id, faucibus at eros. Maecenas ac urna id justo tempus ullamcorper. Praesent tincidunt elit a nibh accumsan, vel fringilla eros tristique.</p>
        </div>
        </ReactCSSTransitionGroup>
        </div>
        <div className="main--inner">
          <div className="team--container">
            <div class="team--member">
              <img src="http://dummyimage.com/150x150/000/fff.png" />
              <h2>Jose Lo Jr.</h2>
              <h4>Full Stack JS Developer</h4>
              <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed et tellus at quam sodales mollis. Fusce mi ipsum, ultricies non molestie id, faucibus at eros. Maecenas ac urna id justo tempus ullamcorper. Praesent tincidunt elit a nibh accumsan, vel fringilla eros tristique.</p>
            </div>
            <div class="team--member">
              <img src="http://dummyimage.com/150x150/000/fff.png" />
              <h2>Jeu Guarino</h2>
              <h4>Full Stack JS Developer</h4>
              <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed et tellus at quam sodales mollis. Fusce mi ipsum, ultricies non molestie id, faucibus at eros. Maecenas ac urna id justo tempus ullamcorper. Praesent tincidunt elit a nibh accumsan, vel fringilla eros tristique.</p>
            </div>
            <div class="team--member">
              <img src="http://dummyimage.com/150x150/000/fff.png" />
              <h2>Jose Maria Jocom</h2>
              <h4>Project Manager</h4>
              <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed et tellus at quam sodales mollis. Fusce mi ipsum, ultricies non molestie id, faucibus at eros. Maecenas ac urna id justo tempus ullamcorper. Praesent tincidunt elit a nibh accumsan, vel fringilla eros tristique.</p>
            </div>
            <div class="team--member">
              <img src="http://dummyimage.com/150x150/000/fff.png" />
              <h2>Michael Landas</h2>
              <h4>Graphics</h4>
              <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed et tellus at quam sodales mollis. Fusce mi ipsum, ultricies non molestie id, faucibus at eros. Maecenas ac urna id justo tempus ullamcorper. Praesent tincidunt elit a nibh accumsan, vel fringilla eros tristique.</p>
            </div>
          </div>
				</div>
			</section>
		);
	}
}
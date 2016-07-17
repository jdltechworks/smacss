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
            <h2>Our Team</h2>
            <p></p>
        </div>
        </ReactCSSTransitionGroup>
        </div>
        <div className="main--inner">
          <div className="team--container">
            <div class="team--member">
              <img src="http://dummyimage.com/120x120/000/fff.png" />
              <h2>Jose Lo Jr.</h2>
              <h4>Full Stack JS Developer</h4>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
              <ul class="social social-circle">
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-github"></i></a></li>
              </ul>
            </div>
            <div class="team--member">
              <img src="http://dummyimage.com/120x120/000/fff.png" />
              <h2>Jeu Guarino</h2>
              <h4>Full Stack JS Developer</h4>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
              <ul class="social social-circle">
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-github"></i></a></li>
              </ul>
            </div>
            <div class="team--member">
              <img src="http://dummyimage.com/120x120/000/fff.png" />
              <h2>Jose Maria Jocom</h2>
              <h4>Project Manager</h4>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
              <ul class="social social-circle">
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-github"></i></a></li>
              </ul>
            </div>
            <div class="team--member">
              <img src="http://dummyimage.com/120x120/000/fff.png" />
              <h2>Michael Landas</h2>
              <h4>Graphics</h4>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
              <ul class="social social-circle">
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-github"></i></a></li>
              </ul>
            </div>
          </div>
				</div>
			</section>
		);
	}
}
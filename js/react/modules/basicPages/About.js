import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
export default class About extends React.Component {
	render() {
		return (
      <section id="about" className="main about">
        <div className="main--headings">
          <div className="main--headings-inner">
            <h2>Our <span>Team</span></h2>
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
          <div className="team--container">
            <div class="team--member">
              <img src="http://dummyimage.com/120x120/000/fff.png" />
              <h2>Jose <span>Lo Jr.</span></h2>
              <h4>Full Stack Developer</h4>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
              <ul class="social social-circle">
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-github"></i></a></li>
              </ul>
            </div>
            <div class="team--member">
              <img src="http://dummyimage.com/120x120/000/fff.png" />
              <h2>Neil John <span>Gonzaga</span></h2>
              <h4>Full Stack Developer</h4>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
              <ul class="social social-circle">
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-github"></i></a></li>
              </ul>
            </div>
            <div class="team--member">
              <img src="http://dummyimage.com/120x120/000/fff.png" />
              <h2>Jose Maria <span>Jocom</span></h2>
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
              <h2>Michael <span>Landas</span></h2>
              <h4>WEB/UI/UX Designer</h4>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
              <ul class="social social-circle">
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-github"></i></a></li>
              </ul>
            </div>
          </div>
          </ReactCSSTransitionGroup>
				</div>
			</section>
		);
	}
}
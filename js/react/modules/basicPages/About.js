import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
export default class About extends React.Component {
	render() {
		return (
      <section className="main">
        <div className="main--headings">
          <div className="main--headings-inner">
            <h2>Our Team</h2>
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
          <div class="col-12 contact--headings">
            <h2><i class="fa fa-group"></i></h2>
            <p>Curabitur nunc orci, aliquet vitae odio eu, euismod consequat ipsum. Nam urna leo, dignissim quis risus ut, consequat mollis erat. Duis nisl risus, ultricies nec lobortis non, euismod id sapien. Donec sodales venenatis viverra. Nulla accumsan </p>
          </div>
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
              <h2>Neil John Gonzaga</h2>
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
          </ReactCSSTransitionGroup>
				</div>
			</section>
		);
	}
}
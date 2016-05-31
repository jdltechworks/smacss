import React from 'react';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false
    }
  }
	sendMail(e) {
    e.preventDefault();
    console.log(this.refs);
    e.currentTarget.lastChild.disabled = e.currentTarget.lastChild.disabled === true ? false : true;
    e.currentTarget.lastChild.style.cursor = 'not-allowed';
  }
  render() {
    let { disabled } = this.state;
		return (
			<section className="main">
        <div className="main--headings">
          <div className="main--headings-inner">
            <h2>Contact Us</h2>
          </div>
        </div>
				<div className="main--inner">
					<div className="main--content contact--page">
            <div className="article--type">
              <img src="img/platform/nodejs.png" alt="nodeJs" />
             </div>
            <h2>Contact Us</h2>
            <div class="contact--page-form">
              <form className="contact--form" onSubmit={this.sendMail.bind(this)}>
                <input type="text" ref="fname" name="fname" placeholder="First name"/>
                <input type="text" ref="lname" name="lname" placeholder="Last name"/>
                <input type="email" ref="email" name="email" placeholder="Email"/>
                <input type="text" ref="subject" name="subject" placeholder="Subject"/>
                <textarea placeholder="Your message" cols="50" rows="10"></textarea>
                <button className="button success">Submit</button>
              </form>
            </div>
          </div>
          <aside className="sidebar">
            <div className="sidebar--items">
              <div className="sidebar--series-menu">
                <h2>Address</h2>
                <ul>
                  <li><a href="#">78 Veloso St. Bo. Obrero Davao City 8000</a></li>
                </ul>
              </div>
              <div className="sidebar--series-menu">
                <h2>Phone</h2>
                <ul>
                  <li><a href="#">+6382-305-7453</a></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
			</section>
		);
	}
}
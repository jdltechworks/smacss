import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false
    }
  }
	sendMail(e) {
    e.preventDefault();
    console.log(this.refs.fname.input.value);
  }
  render() {
    let { disabled } = this.state;
    let fullWidth = {
      width: '100%'
    };
    let floatLabel = {
      color: '#999'
    };
    
    let inputFocus = {
      border: '2px solid',
      borderColor: '#9dbe68',
      borderWidth: '0 0 2px 0'
    };
		return (
      <section className="main">
        <div className="main--headings">
          <div className="main--headings-inner">
            <h2>Get in Touch</h2>
          </div>
        </div>
				<ReactCSSTransitionGroup
          component="div"
          transitionName="route"
          className="main--inner"
          transitionEnterTimeout={600}
          transitionAppearTimeout={600}
          transitionLeaveTimeout={400}
          transitionAppear={true}
        >
          <div className="contact--container">
          <div className="col-12 contact--headings">
            <h2><i className="fa fa-phone"></i></h2>
            <p>Curabitur nunc orci, aliquet vitae odio eu, euismod consequat ipsum. Nam urna leo, dignissim quis risus ut, consequat mollis erat. Duis nisl risus, ultricies nec lobortis non, euismod id sapien. Donec sodales venenatis viverra. Nulla accumsan </p>
          </div>
          <div className="col-6 contact--details">
            <h2>Contact Details:</h2>
            <ul>
              <li><i className="fa fa-home"></i> <span>78 Veloso St. Bo. Obrero Davao City Philippines 8000</span></li>
              <li><i className="fa fa-phone"></i> <span>(+63) 305-7453</span></li>
              <li><i className="fa fa-envelope"></i> <span>info@jdltechworks.com</span></li>
            </ul>
          </div>
  					<div className="col-6 contact--page">
              <div class="contact--page-form">
                <h2>Contact Form</h2>
                <form className="contact--form">
                <div className="col-6 input-gutter">
                  <TextField 
                    hintText="First name" 
                    underlineFocusStyle={inputFocus} 
                    floatingLabelStyle={floatLabel}
                    ref="fname" 
                    name="fname" 
                    floatingLabelText="First name" 
                    fullWidth={true}/>
                  </div>
                  <div className="col-6">
                  <TextField 
                    hintText="Last name" 
                    underlineFocusStyle={inputFocus} 
                    floatingLabelStyle={floatLabel} 
                    ref="lname" 
                    name="lname" 
                    floatingLabelText="Last name" 
                    fullWidth={true}/>
                  </div>
                  <TextField 
                  hintText="email" 
                  floatingLabelStyle={floatLabel} 
                  ref="fname" name="email" 
                  floatingLabelText="Email address" 
                  fullWidth={true}
                  underlineFocusStyle={inputFocus} 
                  />
                  <TextField 
                    hintText="Subject"
                    underlineFocusStyle={inputFocus}
                    floatingLabelStyle={floatLabel}
                    ref="subject" 
                    name="subject" 
                    floatingLabelText="Subject" 
                    fullWidth={true}/>
                  <TextField
                    underlineFocusStyle={inputFocus}
                    floatingLabelStyle={floatLabel}
                    floatingLabelText="Your message"
                    multiLine={true}
                    fullWidth={true}
                    rows={5}
                      />
                  <br />

                  <RaisedButton backgroundColor={`#9dbe68`} labelColor="#fff" label="SEND" fullWidth={true} onTouchTap={this.sendMail.bind(this)} />
                </form>
              </div>
            </div>
          </div>
        </ReactCSSTransitionGroup>

      </section>
		);
	}
}
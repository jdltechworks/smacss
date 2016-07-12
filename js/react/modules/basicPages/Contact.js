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
      color: '#000'
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
            <h2>Contact Us</h2>
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
					<div className="main--content contact--page">
            <div class="contact--page-form">
              <form className="contact--form">
                <TextField 
                  hintText="First name" 
                  underlineFocusStyle={inputFocus} 
                  floatingLabelStyle={floatLabel} 
                  ref="fname" 
                  name="fname" 
                  floatingLabelText="First name" 
                  fullWidth={true}/>
                <TextField 
                  hintText="Last name" 
                  underlineFocusStyle={inputFocus} 
                  floatingLabelStyle={floatLabel} 
                  ref="lname" 
                  name="lname" 
                  floatingLabelText="Last name" 
                  fullWidth={true}/>
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
        </ReactCSSTransitionGroup>
      </section>
		);
	}
}
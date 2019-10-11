import React, {Component} from 'react';
import {Button, Modal,  } from 'react-bootstrap';

import './Element-Signup.css'
class Signup extends Component {
  constructor(props){
    super(props);
    this.state={

    }
    
  }

 

  render(){
    //onClick={this.props.onHide}
      return (
      <Modal {...this.props}  centered>
          <div className="Signup">
          <div className="Signup-Modal-main">
            <div>
              <img
                className="signup-button-cross"
                src="images/icon/cross.svg"
                onClick={this.props.onHide}
              />
            </div>
            <div className="signup-register">
              <div className="signup-register-text">Register</div>
            </div>

            <form method="POST" action="/signup">
              <div className="signup-form">
                <div className="signup-form-general">
                  <label className="signup-form-label">NAME</label>
                  <div className="signup-form-input">
                    <input
                      name="username"
                      id="username"
                      type="text"
                      className="signup-form-input-text"
                      placeholder="Enter your name..."
                    />
                  </div>
                </div>
                <div className="signup-form-general edit-form">
                  <label className="signup-form-label">EMAIL</label>
                  <div className="signup-form-input">
                    <input
                    name="email"
                    id="email"
                      type="email"
                      className="signup-form-input-text"
                      placeholder="Enter your email..."
                    />
                  </div>
                </div>
                <div className="signup-form-general edit-form">
                  <label className="signup-form-label">PASSWORD</label>
                  <div className="signup-form-input">
                    <input
                      name="password"
                      id="password"
                      type="password"
                      className="signup-form-input-text"
                      placeholder="Enter your password..."
                    />
                  </div>
                </div>

                <div className="Signup-Modal-content">
                  <div>By creating an account you agree to the</div>
                  <div>
                    <div>
                      <ul className="Signup-Modal-Footer-content">
                        <li>
                          <p>Terms of Service&nbsp;</p>
                        </li>

                        <li>and&nbsp;</li>
                        <li>
                          <p>Privacy Policy</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="signup-button">
                  <button className="signup-button-content">
                    <div className="text-register">Register</div>
                  </button>
                </div>
              </div>
            </form>
            <div className="Signup-Modal-Footer">
              <div className="Signup-Modal-Footer-content">
                <ul className="Signup-Modal-Footer-ul">
                  <li className="Signup-Footer-ul-li">Do you have account?&nbsp;</li>
                  <li className="Signup-Footer-ul-li color">
                    Log in
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      );
  }
};




export default Signup;

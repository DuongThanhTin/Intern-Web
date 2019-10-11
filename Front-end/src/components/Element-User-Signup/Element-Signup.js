import React, {Component} from 'react';
import {Button, Modal,  } from 'react-bootstrap';
import axios from 'axios';

import './Element-Signup.css'
class Signup extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      email:'',
      password:'',
      users:[],
      closeSignup: false,
        }
    
  }

  componentDidMount(){
   
  }


  onChange=(event)=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  /*onSubmitRegister=(event)=>{
    event.preventDefault();
    const register= this.state
    console.log("TCL: Signup -> onSubmitRegister -> register", register)
    this.props.onSubmitRegister(this.state)
  }*/
  onSubmitRegister=(event)=>{
    console.log(event);
    
    event.preventDefault();
    const register= this.state
    axios.post('http://localhost:4000/signup',register)
    .then(res=>console.log(res.data))
    console.log("TCL: Signup -> onSubmitRegister -> register", register)

    this.props.onHide(); 
    
  
    //this.props.onHandleSignup(false);
  }

  render(){
    //onClick={this.props.onHide}
      return (
        <Modal {...this.props} centered>
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

              <form onSubmit={this.onSubmitRegister}>
                <div className="signup-form">
                  <div className="signup-form-general">
                    <label className="signup-form-label">NAME</label>
                    <div className="signup-form-input">
                      <input
                        name="username"
                        id="username"
                        type="text"
                        value={this.state.username}
                        onChange={this.onChange}
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
                        onChange={this.onChange}
                        value={this.state.email}
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
                        onChange={this.onChange}
                        value={this.state.password}
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
                    <button type="submit" className="signup-button-content">
                      <div className="text-register">Register</div>
                    </button>
                  </div>
                </div>
              </form>
              <div className="Signup-Modal-Footer">
                <div className="Signup-Modal-Footer-content">
                  <ul className="Signup-Modal-Footer-ul">
                    <li className="Signup-Footer-ul-li">
                      Do you have account?&nbsp;
                    </li>
                    <li className="Signup-Footer-ul-li color">Log in</li>
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

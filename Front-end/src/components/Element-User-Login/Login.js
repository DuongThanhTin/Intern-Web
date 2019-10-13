import React, { Component } from "react";
import {  Modal } from "react-bootstrap";
import axios from 'axios';

import "./Login.css";
import ButtonHeader from "../ButtonHeader/ButtonHeader";
import FormInput from "../FormInput/FormInput";


let borderinput = "form-input ";
let conditiontexterror="login-error-condition-text-show "

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonheadername: "Login",
      email: "",
      password: "",
      iscloseLogin: false,
      isColorButtonLogin: false,
      error: false,
    };
  }
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      isColorButtonLogin: true
    });
    if (event.target.value === "") {
      this.setState({
        isColorButtonLogin: false
      });
    }
  };

  onSubmitLogin = event => {
    console.log(event);
    event.preventDefault();
    const login = this.state;
    axios.post("http://localhost:4000/login", login).then(res => {
      let isError = res.data.error
      this.setState({
        error: isError
      })
      console.log("Error", this.state.error)
      if(this.state.error){
        this.props.onHide();
        this.setState({
          isColorButtonLogin: false
        });
      }
    });

    if(!this.state.error){
      borderinput = " error";
      conditiontexterror=" error-text";
    }
    
    
  };

  render() {
    
    if (this.state.isColorButtonLogin) {
      borderinput += " form-input-border";
    }
    else{
      borderinput = "form-input ";
   //   conditionpassword ="signup-error-condition-text-show";
    }
    return (
      <Modal {...this.props} centered>
        <div className="login">
          <div className="login-Modal-main">
            <div>
              <img
                className="signup-button-cross"
                src="images/icon/cross.svg"
                onClick={this.props.onHide}
                alt=""
              />
            </div>
            <div className="login-text">
              <div className="login-text-center">Log In</div>
              <div className={conditiontexterror}>
                Your e-mail/password is invalid!
              </div>
            </div>

            <form onSubmit={this.onSubmitLogin}>
              <div className="login-form">
                <div className="login-Modal-content">
                  <FormInput
                    borderInput={borderinput}
                    name="E-MAIL"
                    inputName="email"
                    inputId="email"
                    inputType="email"
                    inputValue={this.state.email}
                    inputOnChange={this.onChange}
                    inputPlacehodler="Enter your email..."
                  />
                  <FormInput
                    borderInput={borderinput}
                    name="PASSWORD"
                    inputName="password"
                    inputId="password"
                    inputType="password"
                    inputValue={this.state.password}
                    inputOnChange={this.onChange}
                    inputPlacehodler="Enter your password..."
                  />
                </div>

                <div className="edit-center">
                  <div className="edit-center-left">
                    <img
                      className="Logo-icon"
                      src="images/icon/check-box.svg"
                      alt=""
                    />
                    <div className="edit-center-left-text">
                      Remember password
                    </div>
                  </div>
                  <div className="edit-center-right-text">
                    Forgot your password?
                  </div>
                </div>

                <div className="login-button">
                  <ButtonHeader
                    buttonname={this.state.buttonheadername}
                    onHandleChangeColor={this.state.isColorButtonLogin}
                    onHandleSubmit={this.onSubmitLogin}
                  />
                </div>
              </div>
            </form>
            <div className="login-Modal-Footer">
              <div className="Signup-Modal-Footer-content">
                <ul className="Signup-Modal-Footer-ul">
                  <li>Do you have account?&nbsp;</li>
                  <li>
                    <p>Register</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default Login;

import React, { Component } from "react";
import {  Modal } from "react-bootstrap";
import API from '../../utils/utils'

import "./Login.scss";
import ButtonHeader from "../../components/ButtonHeader/ButtonHeader";
import FormInput from "../../components/FormInput/FormInput";


let borderinput = "form-input ";
let conditiontexterror="login-error-condition-text-show "

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonheadername: "Login",
      email: "",
      password: "",
      isAuth: false,
      isColorButtonLogin: false,
      error: false,
      token: null,
      tokenrole:null,
      userID: null,
    };
  }
  

  onChangeInputValue = event => {
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


  handleLogin = event => {
    event.preventDefault();
    const login = this.state;
    API.post("/login", login).then(res => {
      let isError = res.data.error
      this.setState({
        error: isError
      })
      console.log("Error", this.state.error)
      if(this.state.error){
        conditiontexterror="login-error-condition-text-show"
        this.props.onHide();
        this.setState({
          isColorButtonLogin: false,
          username:'',
          email:'',
          password:'',
          token: res.data.token,
          userID: res.data.userID,
          tokenrole: res.data.tokenrole,
          isAuth: true,
        })
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userID', res.data.userID);
        localStorage.setItem('username', res.data.username);
        localStorage.setItem('tokenrole', res.data.tokenrole);
        this.props.HandleLoginHeader(true,res.data.tokenrole);
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
          <div className="login-modal-main">
            <div>
              <img
                className="login-button-cross"
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

            <form onSubmit={this.handleLogin}>
              <div className="login-form">
                <div className="login-Modal-content">
                  <FormInput
                    borderInput={borderinput}
                    name="E-MAIL"
                    inputName="email"
                    inputId="email"
                    inputType="email"
                    inputValue={this.state.email}
                    inputOnChange={this.onChangeInputValue}
                    inputPlacehodler="Enter your email..."
                  />
                  <FormInput
                    borderInput={borderinput}
                    name="PASSWORD"
                    inputName="password"
                    inputId="password"
                    inputType="password"
                    inputValue={this.state.password}
                    inputOnChange={this.onChangeInputValue}
                    inputPlacehodler="Enter your password..."
                  />
                </div>

                <div className="edit-center">
                  <div className="edit-center-left">
                    <img
                      className="logo-icon-check"
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
               
                  />
                </div>
              </div>
            </form>
            <div className="login-modal-footer">
              <div className="signup-modal-footer-content">
                <ul className="fignup-modal-footer-ul">
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

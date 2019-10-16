import React, {Component} from 'react';
import { Modal,  } from 'react-bootstrap';
import axios from 'axios';

import './Signup.scss'
import ButtonHeader from '../UI/ButtonHeader/ButtonHeader';


let conditiontexterror ="signup-error-condition-text-show";
let borderinput = "signup-form-input ";
let conditionpassword = "signup-error-condition-text-show ";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      users: [],
      error: false,
      closeSignup: false,
      isColorButtonRegister: false,
      buttonheadername: "Register",
      
    };
  }

  componentDidMount() {
   
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      isColorButtonRegister: true
    });
    if (event.target.value === "") {
      this.setState({
        isColorButtonRegister: false
      });
    }
  };

  onSubmitRegister = event => {
    console.log("Hello", event)
    event.preventDefault();
    const register = this.state;
    axios.post("http://localhost:4000/signup", register).then(res => {
      console.log(res.data);
      let isError = res.data.error
      this.setState({
        error: isError
      })
      console.log("TCL: Signup -> onSubmitRegister -> register", register);
      console.log("TCL error:", this.state.error)
      
      if(this.state.error){
        this.props.onHide();
        this.setState({
          isColorButtonRegister: false,
          username:'',
          email:'',
          password:'',
        
        });
        alert('Register Complete!')
      }
    });

    if(!this.state.error){
      borderinput = "signup-error";
      conditiontexterror=" signup-error-text";
      conditionpassword = "signup-error-text";
    }
    
  };

  render() {
    //onClick={this.props.onHide}


    if (this.state.isColorButtonRegister) {
      borderinput += " signup-form-input-border";
      conditionpassword=" "
      conditionpassword +=" condition-password ";
    }
    else{
      borderinput = "signup-form-input ";
      conditionpassword ="signup-error-condition-text-show";
    }
    return (
      <Modal {...this.props} centered>
        <div className="signup">
          <div className="signup-sodal-main">
            <div>
              <img
                className="signup-button-cross"
                src="images/icon/cross.svg"
                onClick={this.props.onHide}
                alt=""
              />
            </div>
            <div className="signup-register">
              <div className="signup-register-text">Register</div>
            </div>

            <form onSubmit={this.onSubmitRegister}>
              <div className="signup-form">
                <div className="signup-form-general">
                  <label className="signup-form-label">NAME</label>
                  <div className={borderinput}>
                    <input
                      name="username"
                      id="username"
                      type="text"
                      value={this.state.username}
                      onChange={this.onChange}
                      className="signup-form-input-text  "
                      placeholder="Enter your name..."
                      
                    />
                   
                  </div>
                  <div className={conditiontexterror}>
                      Please enter a valid name
                    </div>
                </div>
                <div className="signup-form-general edit-form">
                  <label className="signup-form-label">EMAIL</label>
                  <div className={borderinput}>
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
                  <div className={conditiontexterror}>
                    Please enter a valid e-mail
                  </div>
                </div>
                <div className="signup-form-general edit-form">
                  <label className="signup-form-label">PASSWORD</label>
                  <div className={borderinput}>
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

                  <div className={conditionpassword}>
                    Your passwords must be more than 6 characters
                  </div>
                </div>

                <div className="signup-modal-content">
                  <div>By creating an account you agree to the</div>
                  <div>
                    <div>
                      <ul className="signup-modal-footer-content">
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
                  <ButtonHeader
                    buttonname={this.state.buttonheadername}
                    onHandleChangeColor={this.state.isColorButtonRegister}
                    onHandleSubmit={this.onSubmitRegister}
                  />
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

import React, { Component } from "react";

import "./PageHeader.scss";
import Signup from "../../views/Signup/Signup";
import Login from "../../views/Login/Login";
import DropDown from "../DropDown/DropDown";

class PageHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signup: false,
      login: false,
      isAuth: false,
      tokenrole:null,
      token: null,
      userID: ""
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    const userID = localStorage.getItem("userID");
    const tokenrole = localStorage.getItem("tokenrole");
    if (!token) {
      return;
    } else {
      this.setState({ isAuth: true, token: token, userID: userID, tokenrole: tokenrole });
    }
  }

  HandleSignupToogle = () => {
    this.setState({
      signup: !this.state.signup
    });
  };

  HandleLoginToogle = () => {
    this.setState({
      login: !this.state.login
    });
  };

  HandleLoginAuth = (isAuth,tokenRole) => {
    this.setState({
      isAuth: isAuth,
      tokenrole: tokenRole,
    });
  };

  HandleLogout = () => {
    this.setState({ isAuth: false, token: null,tokenrole:null });
    
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    localStorage.removeItem("tokenrole");
  };

  render() {
    const {isAuth, tokenrole}=this.state;
   
    let routes = (
      <div className="register-btn">
        <div className="register-text" onClick={this.HandleSignupToogle}>
          Register
        </div>
        <button className="button-login" onClick={this.HandleLoginToogle}>
          <div className="button-text">
            <strong>Log In </strong>
          </div>
        </button>

        <div className="">
          <img className="logo-icon" src="images/icon/cart.svg" alt="" />
        </div>
      </div>
    );

    if (isAuth && tokenrole==="customer") {
      routes = (
        <div className="register-btn">
          <button className="avatar-customer" onClick={this.HandleLogout} />
          <div className="">
            <img className="logo-icon" src="images/icon/cart.svg" alt="" />
          </div>
        </div>
      );
    }
    if (isAuth && tokenrole==="admin") {
      routes = (
        <div className="register-btn">
          <button className="avatar-admin" onClick={this.HandleLogout} />
          <div className="">
            <img className="logo-icon" src="images/icon/cart.svg" alt="" />
          </div>
        </div>
      );
    }

    return (
      <div className="pageHeader">
        <div className="header-1">
          <div className="container-header">
            <div className="edit-header">
              <form>
                <div className="search-input">
                  <input
                    className="search-text"
                    type="text"
                    placeholder="Search"
                  />
                  <a className="search-button" href="/">
                    <img
                      className="icon-search"
                      src="images/icon/search.png"
                      alt=""
                    />
                  </a>
                </div>
              </form>
              <div className="logo">
                <img className="" src="images/icon/logo.png" alt="" />
              </div>

              {routes}
            </div>
          </div>
        </div>
        <div className="header-2">
          <ul className="ul-menu">
            <DropDown name="Men" />
            <DropDown name="Ladies" />
            <DropDown name="Girls" />
            <DropDown name="Boys" />
          </ul>
        </div>
        <Signup show={this.state.signup} onHide={this.HandleSignupToogle} />
        <Login
          show={this.state.login}
          onHide={this.HandleLoginToogle}
          HandleLoginHeader={this.HandleLoginAuth}
        />
      </div>
    );
  }
}

export default PageHeader;

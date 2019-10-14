import React, { Component } from "react";
import "./PageHeader.scss";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";

class PageHeader extends Component {
  constructor() {
    super();
    this.state = {
      signup: false,
      login: false
    };
  }

  componentDidMount() {
    console.log(this.state.signup);
  }

  onHandleSignupToogle = () => {
    this.setState({
      signup: !this.state.signup
    });
  };

  onHandleLoginToogle = () => {
    this.setState({
      login: !this.state.login
    });
  };

  render() {
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

              <div className="register-btn">
                <div
                  className="register-text"
                  onClick={this.onHandleSignupToogle}
                >
                  Register
                </div>
                <button
                  className="button-login"
                  onClick={this.onHandleLoginToogle}
                >
                  <div className="button-text">
                    <strong>Log In </strong>
                  </div>
                </button>

                <div className="">
                <img className="logo-icon" src="images/icon/cart.svg" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-2">
          <ul className="ul-menu">
            <li className="dropdown">
              <span>Men</span>
              <img
                className="dropdown-images"
                src="images/icon/arrow.png"
                alt=""
              />
              <ul className="dropdown-content dropdown-edit">
                <div className="dropdown-characters">
                  <li>
                    <a href="/">Tops</a>
                  </li>
                  <li>
                    <a href="/">Bottoms</a>
                  </li>
                  <li>
                    <a href="/">Dresses</a>
                  </li>
                  <li>
                    <a href="/">Jackets</a>
                  </li>
                  <li>
                    <a href="/">Shoes</a>
                  </li>
                  <li>
                    <a href="/">Accesories</a>
                  </li>
                  <li>
                    <a href="/">Sale</a>
                  </li>
                </div>
              </ul>
            </li>
            <li className="dropdown">
              <span>Ladies</span>
              <img
                className="dropdown-images"
                src="images/icon/arrow.png"
                alt=""
              />
              <ul className="dropdown-content dropdown-edit">
                <div className="dropdown-characters">
                  <li>
                    <a href="/">Tops</a>
                  </li>
                  <li>
                    <a href="/">Bottoms</a>
                  </li>
                  <li>
                    <a href="/">Dresses</a>
                  </li>
                  <li>
                    <a href="/">Jackets</a>
                  </li>
                  <li>
                    <a href="/">Shoes</a>
                  </li>
                  <li>
                    <a href="/">Accesories</a>
                  </li>
                  <li>
                    <a href="/">Sale</a>
                  </li>
                </div>
              </ul>
            </li>
            <li className="dropdown">
              <span>Girls</span>
              <img
                className="dropdown-images"
                src="images/icon/arrow.png"
                alt=""
              />
              <ul className="dropdown-content dropdown-edit">
                <div className="dropdown-characters">
                  <li>
                    <a href="/">Tops</a>
                  </li>
                  <li>
                    <a href="/">Bottoms</a>
                  </li>
                  <li>
                    <a href="/">Dresses</a>
                  </li>
                  <li>
                    <a href="/">Jackets</a>
                  </li>
                  <li>
                    <a href="/">Shoes</a>
                  </li>
                  <li>
                    <a href="/">Accesories</a>
                  </li>
                  <li>
                    <a href="/">Sale</a>
                  </li>
                </div>
              </ul>
            </li>
            <li className="dropdown">
              <span>Boys</span>
              <img
                className="dropdown-images"
                src="images/icon/arrow.png"
                alt=""
              />
              <ul className="dropdown-content dropdown-edit">
                <div className="dropdown-characters">
                  <li>
                    <a href="/">Tops</a>
                  </li>
                  <li>
                    <a href="/">Bottoms</a>
                  </li>
                  <li>
                    <a href="/">Dresses</a>
                  </li>
                  <li>
                    <a href="/">Jackets</a>
                  </li>
                  <li>
                    <a href="/">Shoes</a>
                  </li>
                  <li>
                    <a href="/">Accesories</a>
                  </li>
                  <li>
                    <a href="/">Sale</a>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </div>
        <Signup show={this.state.signup} onHide={this.onHandleSignupToogle} />
        <Login show={this.state.login} onHide={this.onHandleLoginToogle} />
        
      </div>
    );
  }
}

export default PageHeader;

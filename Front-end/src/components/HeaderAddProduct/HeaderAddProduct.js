import React, { Component } from "react";
import { Redirect } from "react-router-dom";


import "./HeaderAddProduct.scss";

class HeaderAddProduct extends Component {


  
  HandleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    localStorage.removeItem("tokenrole");
    localStorage.removeItem("username");
    return <Redirect to="/"/>
  };


  render() {
    return (
      <div className="pageadmin-header">
        <div>
          <div className="pageadmin-header-text-up">{this.props.name}</div>
        </div>
        <div className="pageadmin-header-right">
          <div className="pageadmin-info">
            <button className="pageadmin-info-avatar"  onClick={this.HandleLogout}/>
            <div className="pageadmin-info-name">{this.props.username}</div>
          </div>
          <img
            className="pageadmin-header-right-icon"
            src="images/icon/mail.svg"
            alt=""
          />
          <img
            className="pageadmin-header-right-icon"
            src="images/icon/notification.svg"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default HeaderAddProduct;

import React, { Component } from "react";
import { Link } from "react-router-dom";

//import axios from 'axios';

import "./DropDown.scss";

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //Đã lấy được dữ liệu từ server gửi lên

  render() {
    return (
      <div className="dropdown-main">
        <li className="dropdown">
          <span>{this.props.name}</span>
          <img className="dropdown-images" src="/images/icon/arrow.png" alt="" />
          <ul className="dropdown-content dropdown-edit">
            <div className="dropdown-characters">            
              <li>
                <Link to="/categories">Tops</Link>
              </li>
              <li>
                <Link to="/categories">Bottoms</Link>
              </li>
              <li>
                <Link to="/categories">Dresses</Link>
              </li>
              <li>
                <Link to="/categories">Jackets</Link>
              </li>
              <li>
                <Link to="/categories">Shoes</Link>
              </li>
              <li>
                <Link to="/categories">Accesories</Link>
              </li>
              <li>
                <Link to="/categories">Sale</Link>
              </li>
            </div>
          </ul>
        </li>
      </div>
    );
  }
}

export default DropDown;

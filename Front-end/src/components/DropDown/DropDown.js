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
          <img className="dropdown-images" src="images/icon/arrow.png" alt="" />
          <ul className="dropdown-content dropdown-edit">
            <div className="dropdown-characters">
              <li>
                <Link to="/top">Tops</Link>
              </li>
              <li>
                <Link to="/bottom">Bottoms</Link>
              </li>
              <li>
                <Link to="/dress">Dresses</Link>
              </li>
              <li>
                <Link to="/jacket">Jackets</Link>
              </li>
              <li>
                <Link to="/shoes">Shoes</Link>
              </li>
              <li>
                <Link to="/accesories">Accesories</Link>
              </li>
              <li>
                <Link to="/sale">Sale</Link>
              </li>
            </div>
          </ul>
        </li>
      </div>
    );
  }
}

export default DropDown;

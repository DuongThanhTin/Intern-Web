import React, { Component } from "react";


//import axios from 'axios';

import "./MenuListProduct.scss";

class MenuListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //Đã lấy được dữ liệu từ server gửi lên

  render() {
    return (
      <div className="menulp">
          <div className="menulp-categories">
          </div>
          <div className="menulp-filter">

          </div>
      </div>
    );
  }
}

export default MenuListProduct;

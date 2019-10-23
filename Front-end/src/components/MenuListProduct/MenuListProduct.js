import React, { Component } from "react";
import { Link } from "react-router-dom";

//import axios from 'axios';

import "./MenuListProduct.scss";

class MenuListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //Đã lấy được dữ liệu từ server gửi lên

  render() {
    const menu_Category_Text = [
      {id:11, url: "/categories/", text: " Rompers/ Jumpsuits" },
      {id:21, url: "/categories/", text: "Casual dresses" },
      {id:31, url: "/categories/", text: "Going out dresses" },
      {id:41, url: "/categories/", text: "Party/ Ocassion dresses" },
      {id:51, url: "/categories/", text: "Mini/ Madi dresses" },
      {id:61, url: "/categories/", text: "Sets" }
    ];

    let arrMenuCategory = menu_Category_Text.map((data, index) => (
      <div key={index} className="menulp-text-words">
        <Link to={`${data.url}:id=${data.id}`} className="categories-text">
          {data.text}
        </Link>
      </div>
    ));

    const menu_Filter_Text = [
      { text: "Size" },
      { text: "Color" },
      { text: "Brand" },
      { text: "Price" },
      { text: "Available" }
    ];

    let arrMenuFilter = menu_Filter_Text.map((data, index) => (
      <div key={index} className="menulp-filter-text-words border-filter">
        <div className="filter-text">{data.text}</div>
        <div className="menulp-icon-arrow">
          <img className="icon-arrow" src="images/icon/arrow.png" alt="" />
        </div>
    
      </div>
    ));
    return (
      <div className="menulp">
        <div className="menulp-categories">
          <div className="menulp-categories-text">Category</div>
          <div className="menulp-text">
            <div className="categories">
            <Link to="/categories/alldresses" className="menulp-text-alldress">
              All dresses
            </Link>
            </div>

            {arrMenuCategory}
          </div>
          <div className="alldresses-border-down"></div>
        </div>
        <div className="menulp-filter-text">
          <div>Filter</div>
          <div className="menulp-filter-distance">{arrMenuFilter}</div>
        </div>
      </div>
    );
  }
}

export default MenuListProduct;

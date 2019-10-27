import React, { Component } from "react";

import "./Menu.scss";

class Menu extends Component {

  render() {
    const iconIMAGE_URL = [
      { url: "/images/icon/overview-dark.svg", text: "Overivew" },
      { url: "/images/icon/orders-dark.svg", text: "Orders" },
      { url: "/images/icon/products-dark.svg", text: "Products" },
      { url: "/images/icon/payment-dark.svg", text: "Payments" },
      { url: "/images/icon/promotion-dark.svg", text: "Promotions" },
      { url: "/images/icon/setting-dark.svg", text: "Setting" }
    ];
    let arrMenu = iconIMAGE_URL.map((data,index) => (
      <li key={index}>
        <img src={data.url} alt="" />
        <span>{data.text}</span>
      </li>
    ));
    return (
      <div className="menu">
        <img className="menu-logo" src="images/icon/logo.svg" alt="" />
        <div className="menu-center">
          <ul>{arrMenu}</ul>
        </div>
      </div>
    );
  }
}

export default Menu;

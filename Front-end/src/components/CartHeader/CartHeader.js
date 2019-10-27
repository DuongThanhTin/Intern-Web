import React, { Component } from "react";
import PropTypes from "prop-types";

import "./CartHeader.scss";
class CartHeader extends Component {
  render() {
    var { children } = this.props;
    return (
      <div className="cartheader">
        <div className="cartheader-chidlren">{children}</div>
        <div className="cartheader-viewcart">
          <div className="viewcart-text">View cart</div>
        </div>
      </div>
    );
  }
}

export default CartHeader;

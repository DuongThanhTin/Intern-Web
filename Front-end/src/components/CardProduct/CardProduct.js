import React, { Component } from "react";

import "./CardProduct.scss";

class CardProduct extends Component {
  render() {
    let routes = (
      <div>
        <div className="cardproduct-image">
          <div className="cardproduct-image-edit">
          <img  src="images/example-3.jpg" alt="" />
          </div>
          <div className="cardproduct-hover">
            <div className="cardproduct-hover-text">
              <div className="cardproduct-hover-text-edit">+ Quick Shop</div>
            </div>
          </div>
        </div>
        <div className="cardproduct-info">
          <div className="cardproduct-info-title-edit">
            <div className="cardproduct-info-title">{this.props.name}</div>
          </div>
          <div>
            <div className="cardproduct-info-price">${this.props.price}</div>
          </div>
        </div>
      </div>
    );
    if (this.props.quantity === 0) {
      routes = (
        <div>
          <div className="cardproduct-image">
          <div className="cardproduct-image-edit">
          <img  src="images/example-3.jpg" alt="" />
          </div>
          <div className="cardproduct-hover">
            <div className="cardproduct-hover-text">
              <div className="cardproduct-hover-text-edit">+ Quick Shop</div>
            </div>
          </div>
          </div>
          <div className="cardproduct-info">
            <div className="cardproduct-info-title-edit">
              <div className="cardproduct-info-title">{this.props.name}</div>
            </div>
            <div>
              <div className="cardproduct-info-price">${this.props.price}</div>
            </div>
          </div>
          <div className="listproduct-card-soldout">
            <div className="listproduct-card-soldout-text">Sold out</div>
          </div>
        </div>
      );
    }
    return <div className="cardproduct">{routes}</div>;
  }
}

export default CardProduct;

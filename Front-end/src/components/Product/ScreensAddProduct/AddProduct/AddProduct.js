import React, { Component } from "react";
import { CardDeck, Card } from "react-bootstrap";

import "./AddProduct.scss";
import AddPhoto from "./AddPhoto/AddPhoto";
import FormInputProduct from "../FormInputProduct/FormInputProduct";
import FormOptionInputProduct from "../FormOptionInputProduct/FormOptionInputProduct";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="addproduct">
        <div className="addproduct-header">
          <div>
            <div className="addproduct-header-text-up">Add Product</div>
            <div className="addproduct-header-text-down">
              Products / Add product
            </div>
          </div>
          <div>
            <img
              className="addproduct-header-right-icon"
              src="images/icon/mail.svg"
              alt=""
            />
            <img
              className="addproduct-header-right-icon"
              src="images/icon/notification.svg"
              alt=""
            />
          </div>
        </div>

        <div className="addproduct-main">
          <div className="addproduct-photo ">
            <div className="addproduct-photo-text">Photos</div>
            <AddPhoto />
            <AddPhoto />
            <AddPhoto />
            <AddPhoto />
          </div>
          <div className="condition-text">
            You can add up to 8 photos. The 1st photo will be set as cover (main
            photo)
          </div>
          <FormInputProduct />
          <div className="addproduct-distance-input">
            <div className="addproduct-photo-text-name">Name</div>
            
          </div>
          <FormOptionInputProduct />
          <div className="addproduct-distance-input">
            <div className="addproduct-photo-text-category">Category</div>
            <FormOptionInputProduct />
          </div>
          <div className="addproduct-distance-input">
            <div className="addproduct-photo-text-brand">Brand</div>
          </div>
          <div className="addproduct-distance-input">
          <FormInputProduct />
            <div className="addproduct-photo-text-price">Price($)</div>
            
          </div>
          <div className="addproduct-distance-input">
            <div className="addproduct-photo-text-size">Size</div>
            <FormOptionInputProduct />
          </div>
          <div className="addproduct-distance-input">
            <div className="addproduct-photo-text-colors">colors</div>
            <FormOptionInputProduct />
          </div>
          <div className="addproduct-distance-input">
            <div className="addproduct-photo-text-quantity">quantity</div>
            <FormInputProduct />
          </div>
          <div className="addproduct-distance-input">
            <div className="addproduct-photo-text-desciption">desicription</div>
            <FormOptionInputProduct />
          </div>
        </div>
      </div>
    );
  }
}

export default AddProduct;

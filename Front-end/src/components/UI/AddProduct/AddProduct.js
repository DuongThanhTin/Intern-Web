import React, { Component } from "react";
import { CardDeck, Card } from "react-bootstrap";

import "./AddProduct.scss";
import AddPhoto from "../AddPhoto/AddPhoto";
import FormInputProduct from "../FormInputProduct/FormInputProduct";
import FormOptionInputProduct from "../FormOptionInputProduct/FormOptionInputProduct";

class AddProduct extends Component {

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
        <div className="addproduct-label">
          <div>
            <div  className="addproduct-label-photo">
              <div className="addproduct-label-photo-text">Photos</div>
            </div>
            <div className="addproduct-label-input">
              <ul>
              <li>Name</li>
              <li>Categories</li>
              <li>Brand</li>
              <li>Price ($)</li>
              <li>Size</li>
              <li>Colors</li>
              <li>Quantity</li>
              <li>Description</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="addproduct-main">
          <div className="addproduct-photo ">
            <AddPhoto />
            <AddPhoto />
            <AddPhoto />
            <AddPhoto />
          </div>
          <div className="condition-text">
            You can add up to 8 photos. The 1st photo will be set as cover (main
            photo)
          </div>

          <div className="addproduct-distance-input">
            <FormInputProduct />
          </div>

          <div className="addproduct-distance-input">
            <FormOptionInputProduct />
          </div>
          <div className="addproduct-distance-input">
            <FormOptionInputProduct />
          </div>
          <div className="addproduct-distance-input">
            <FormInputProduct />
          </div>
          <div className="addproduct-distance-input">
            <FormOptionInputProduct />
          </div>
          <div className="addproduct-distance-input">
            <FormOptionInputProduct />
          </div>
          <div className="addproduct-distance-input">
            <FormInputProduct />
          </div>
          <div className="addproduct-distance-input">
            <FormOptionInputProduct />
          </div>
        </div>
      </div>
    );
  }
}

export default AddProduct;

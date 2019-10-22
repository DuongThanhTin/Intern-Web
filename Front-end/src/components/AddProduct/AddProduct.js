import React, { Component } from "react";
import API from '../../utils/utils'
import "./AddProduct.scss";
import AddPhoto from "../AddPhoto/AddPhoto";
import FormInputProduct from "../FormInputProduct/FormInputProduct";
import FormOptionInputProduct from "../FormOptionInputProduct/FormOptionInputProduct";
import {
  PRODUCT_SIZE,
  PRODUCT_CATEGORIES,
  PRODUCT_BRAND,
  PRODUCT_COLORS
} from "../../constants/optionProduct";
import Button from "../../components/ButtonAddProduct/ButtonAddProduct";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isComplete: false,
      name: "",
      categories: [],
      brand: [],
      color: [],
      price: "",
      size: [],
      image: [],
      description: "",
      quantity: ""
    };
  }

  handleValueCategories = value => {
    this.setState(prevState => ({
      categories: [...prevState.categories, value]
    }));
    console.log("categories ", this.state.categories);
  };

  handleValueBrand = value => {
    this.setState(prevState => ({ brand: [...prevState.brand, value] }));
    console.log("brand", this.state.brand);
  };
  handleValueSize = value => {
    this.setState(prevState => ({ size: [...prevState.size, value] }));
    console.log("size", this.state.size);
  };

  handleValueColor = value => {
    this.setState(prevState => ({ color: [...prevState.color, value] }));
    console.log("color", this.state.color);
  };

  handleValueImage = value => {};

  onChangeValue = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleComplete = event => {
    event.preventDefault();
    const product = this.state;
    API.post("/addproduct", product).then(res => {
      let isComplete = res.data.complete;
      this.setState({
        isComplete: isComplete
      });
      if(isComplete){
        this.setState({
          name: "",
          price: "",
          description: "",
          quantity: ""
        })
      }
    });
    console.log("price", product.price);
  };

  render() {
    let isLarge = true;
    const {
      name,
      categories,
      brand,
      size,
      quantity,
      description,
      price,
      color
    } = this.state;
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
          <div className="addproduct-label-general">
            <div className="addproduct-label-photo">
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

        <form onSubmit={this.handleComplete}>
          <div className="addproduct-main">
            <div className="addproduct-photo ">
              <AddPhoto
                name="photo_exmaple_1"
                id="photo_exmaple_1"
                handleValue={this.handleValueImage.bind(this)}
              />
              <AddPhoto
                name="photo_exmaple_2"
                id="photo_exmaple_2"
                handleValue={this.handleValueImage.bind(this)}
              />
              <AddPhoto
                name="photo_exmaple_3"
                id="photo_exmaple_3"
                handleValue={this.handleValueImage.bind(this)}
              />
              <AddPhoto
                name="photo_exmaple_4"
                id="photo_exmaple_4"
                handleValue={this.handleValueImage.bind(this)}
              />
            </div>
            <div className="condition-text">
              You can add up to 8 photos. The 1st photo will be set as cover
              (main photo)
            </div>

            <div className="addproduct-distance-input">
              <FormInputProduct
                name="name"
                id="name"
                value={name}
                OnChange={this.onChangeValue}
           
              />
            </div>

            <div className="addproduct-distance-input">
              <FormOptionInputProduct
                name="categories"
                id="categories"
                value={categories}
                handleValue={this.handleValueCategories.bind(this)}
                optionList={PRODUCT_CATEGORIES}
                isComplete={this.state.isComplete}
              />
            </div>
            <div className="addproduct-distance-input">
              <FormOptionInputProduct
                name="brand"
                id="brand"
                value={brand}
                handleValue={this.handleValueBrand.bind(this)}
                optionList={PRODUCT_BRAND}
                isComplete={this.state.isComplete}
              />
            </div>
            <div className="addproduct-distance-input">
              <FormInputProduct
                name="price"
                id="price"
                value={price}
                OnChange={this.onChangeValue}
              />
            </div>
            <div className="addproduct-distance-input">
              <FormOptionInputProduct
                name="size"
                id="size"
                value={size}
                handleValue={this.handleValueSize.bind(this)}
                optionList={PRODUCT_SIZE}
                isComplete={this.state.isComplete}
              />
            </div>
            <div className="addproduct-distance-input">
              <FormOptionInputProduct
                name="color"
                id="color"
                value={color}
                handleValue={this.handleValueColor.bind(this)}
                optionList={PRODUCT_COLORS}
                isComplete={this.state.isComplete}
              />
            </div>
            <div className="addproduct-distance-input">
              <FormInputProduct
                name="quantity"
                id="quantity"
                value={quantity}
                OnChange={this.onChangeValue}
                isComplete={this.state.isComplete}
              />
            </div>
            <div className="addproduct-distance-input">
              <FormInputProduct
                name="description"
                id="description"
                isLarge={isLarge}
                value={description}
                OnChange={this.onChangeValue}
                isComplete={this.state.isComplete}
              />
            </div>
            <div className="addproduct-button">
              <Button
                className="button"
                addproductButton="button-cancel"
                addproductText="button-text-cancel"
                buttonname="Cancel"
              />
              <Button
                addproductButton="button-submit"
                addproductText="button-text-complete"
                buttonname="Complete"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProduct;

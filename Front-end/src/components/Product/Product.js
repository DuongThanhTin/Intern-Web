import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Product.scss";
import HeaderAddProduct from '../HeaderAddProduct/HeaderAddProduct'
import Button from '../ButtonAdminProducts/ButtonAdminProducts'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token:null,
            username:"",
            tokenrole:null,
        };
      }
    componentDidMount() {
        const token = localStorage.getItem("token");
        const username = localStorage.getItem("username");
        const tokenrole = localStorage.getItem("tokenrole");
        if (!token) {
          return;
        } else {
          this.setState({  token: token, username: username, tokenrole: tokenrole });
        }
        
    }

    HandleAddProduct =()=>{
      window.location.href="/admin/addproduct";
    }
 
  render() {
 
    return (
      <div className="product">
        <HeaderAddProduct name="Products" username={this.state.username} />
        <div  className="product-header-down">
            <div className="header-left">
                <div className="header-left-text">Sort By</div>
          
                    <div className="header-left-input">
                        <div className="header-left-input-text">Data added</div>
                        <img
                      className="icon-dropdown"
                      src="images/icon/dropdown.svg"
                      alt=""
                    />
                    </div>
            </div>
            <div className="header-right">
            <form className="header-right-search">
                <a className="header-search-button" href="/">
                    <img
                      className="icon-search"
                      src="images/icon/search.png"
                      alt=""
                    />
                  </a>
                <div className="header-right-input">
                  <input
                    className="header-right-text"
                    type="text"
                    placeholder="Search product"
                  />
                 
                </div>
              </form>
            <Button text="text-white" buttonname="Add product" image="images/icon/plus-white.svg" Click={this.HandleAddProduct}  orange="pageaddmin-button-orange" white=""/>
            <Button text="text-orange" buttonname="Export" image="images/icon/export-orange.svg"  orange="" white="pageaddmin-button-white"/>
            </div>
        </div>
      </div>
    );
  }
}

export default Product;

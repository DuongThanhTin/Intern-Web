import React, { Component } from "react";
import "./CardProduct.scss";
import {toast } from "react-toastify";

class CardProduct extends Component {
  render() {
    const {name,price,quantity,product} = this.props
    let routes = (
      <div>
        <div className="cardproduct-image">
          <div className="cardproduct-image-edit">
          <img  src="/images/example-3.jpg" alt="" />
          </div>
        
          <div className="cardproduct-hover"  onClick={()=>this.HandleAddtoCart(product)}>
            <div className="cardproduct-hover-text">
              <div className="cardproduct-hover-text-edit">+ Quick Shop</div>
            </div> 
          
          </div>
         
        </div>
        <div className="cardproduct-info">
          <div className="cardproduct-info-title-edit">
            <div className="cardproduct-info-title">{name}</div>
          </div>
          <div>
            <div className="cardproduct-info-price">${price}</div>
          </div>
        </div>
      </div>
    );
    if (quantity === 0) {
      routes = (
        <div>
          <div className="cardproduct-image">
          <div className="cardproduct-image-edit">
          <img  src="/images/example-3.jpg" alt="" />
          </div>
          <div className="cardproduct-hover">
          
            <div className="cardproduct-hover-text">
              <div className="cardproduct-hover-text-edit">+ Quick Shop  </div>
            </div> 
      
          </div>
          </div>
          <div className="cardproduct-info">
            <div className="cardproduct-info-title-edit">
              <div className="cardproduct-info-title">{name}</div>
            </div>
            <div>
              <div className="cardproduct-info-price">${price}</div>
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

  HandleAddtoCart=(product)=>{
    
    toast.info("Add Product to Cart Success!", {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 2000,
    });
    this.props.HandleAddtoCart(product)
  }
}

export default CardProduct;

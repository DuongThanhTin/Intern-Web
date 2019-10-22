import React, { Component } from "react";
import API from '../../utils/utils'

import "./ListProduct.scss";
import CardProduct from "../CardProduct/CardProduct";

class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount(){
    console.log(process.env.REACT_APP_BASE_URL)
   API.get("/listproduct")
    .then(res=>{
      const products = res.data.listproducts
      
      this.setState({ 
        products
       });
    })
  }

  render() {
    const {products} = this.state
    let arrProduct =products.map((product,index)=>(
      <div  key={index} className="listproduct-card-detail">
      <CardProduct name={product.name} price={product.price} quantity={product.quantity}/>
      </div>
    ))
    return (
      <div className="listproduct">
        <div className="listproduct-text">Ladies/ Dresses</div>
        <div className="dropdown-filter">
          <div className="filter-text">Sort By:&nbsp;</div>
          <div className="filter-text-right">Popularity</div>
          <div className="filter-icon-arrow">
            <img src="images/icon/arrow.png" alt="" />
          </div>
        </div>
        <div className="listproduct-card flex-wrap">
         {arrProduct}
        
        </div>
      </div>
    );
  }
}

export default ListProduct;

import React, { Component } from "react";
import API from '../../utils/utils'

import "./ListProduct.scss";
import CardProduct from "../CardProduct/CardProduct";
import ListProductCategory from "../ListProductCategory/ListProductCategory";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount(){
   // const postId = this.props.match.params.postId;
   API.get("/categories")
    .then(res=>{
      const products = res.data.listproducts
      this.setState({ 
        products
       });
  
    })
    
  }

  render() {
    const {products} = this.state
    const {HandleAddtoCart}=this.props
    let arrProduct =products.map((product,index)=>(
      <div  key={index} className="listproduct-card-detail">
      <CardProduct name={product.name} price={product.price} quantity={product.quantity} _id={product._id} product={product} HandleAddtoCart={HandleAddtoCart}/>
      </div>
    ))
    return (
      <div className="listproduct">
        <div className="listproduct-text">Ladies/ Dresses</div>
        <div className="dropdown-filter">
          <div className="filter-text">Sort By:&nbsp;</div>
          <div className="filter-text-right">Popularity</div>
          <div className="filter-icon-arrow">
            <img src="/images/icon/arrow.png" alt="" />
          </div>
        </div>
        <div className="listproduct-card flex-wrap">
         {arrProduct}   
        </div>
        <ToastContainer/>
      </div>
    );
  }
}

export default ListProduct;

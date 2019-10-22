import React, {Component} from 'react';
//import axios from 'axios';

import './PageBannerListProduct.scss'
import MenuListProduct from '../MenuListProduct/MenuListProduct'
import ListProduct from '../ListProduct/ListProduct' 


class PageBannerListProduct extends Component {
 
  render(){
  
      return(
          <div className = "pagebanner-product">
            <MenuListProduct/>
            <ListProduct/>
          </div>
      );
  }
};




export default PageBannerListProduct;

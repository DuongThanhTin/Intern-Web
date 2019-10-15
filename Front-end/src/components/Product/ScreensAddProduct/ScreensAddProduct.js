import React, {Component} from 'react';

import AddProduct from './AddProduct/AddProduct'
import Menu from '../Menu/Menu'
import './ScreensAddProduct.scss'


class ScreensAddProduct extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }

  componentDidMount(){
    
   }
  render(){
      return(
          <div className = "screens-addproduct">
            <Menu/>
            <AddProduct/>
          </div>
      );
  }
};




export default ScreensAddProduct;

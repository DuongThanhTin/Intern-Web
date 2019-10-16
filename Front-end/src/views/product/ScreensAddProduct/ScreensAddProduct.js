import React, {Component} from 'react';

import AddProduct from '../../../components/UI/AddProduct/AddProduct'
import Menu from '../../../components/UI/Menu/Menu'
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

 document.getElementById('product');

export default ScreensAddProduct;

import React, {Component} from 'react';

import AddProduct from '../../components/AddProduct/AddProduct'
import Menu from '../../components/Menu/Menu'
import './AddProductPage.scss'


class AddProductPage extends Component {
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

export default AddProductPage;

import React, {Component} from 'react';
import './ButtonAddProduct.scss'

class ButtonAddProduct extends Component {


  render(){
         let desginButton= "buttonaddproduct " + this.props.addproductButton;
         let addproductText=this.props.addproductText;
      return (
            <button type="submit" className={desginButton}>
                <div className={addproductText}>{this.props.buttonname}</div>
            </button>
         
      );
  }
};




export default ButtonAddProduct;

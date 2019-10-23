import React, {Component} from 'react';
import './ButtonAdminProducts.scss'

class ButtonAdminProducts extends Component {


  render(){
         let desginButton= `${this.props.orange} ${this.props.white}` 
         
      return (
            <button  className={desginButton} onClick={this.props.Click}>
                <div className="button-text">
                <img src={this.props.image} alt=""/>
                <div className={this.props.text}>{this.props.buttonname}</div>
                </div>
            </button>
         
      );
  }
};




export default ButtonAdminProducts;

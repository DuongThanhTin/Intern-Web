import React, {Component} from 'react';

import './FormInputProduct.scss'


class FormInputProduct extends Component {

  render(){
      let small=(
        <input className="forminputproduct-text" type="text"/>
      )
      if(this.props.isLarge){
        small=(
        <input className="forminputproduct-text-large" type="text"/>
        )
      }
      return(
          <div className = "forminputproduct">
            {small}
          </div>
      );
  }
};




export default FormInputProduct;

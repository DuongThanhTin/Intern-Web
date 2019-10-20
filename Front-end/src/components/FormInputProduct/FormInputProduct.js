import React, {Component} from 'react';

import './FormInputProduct.scss'


class FormInputProduct extends Component {

  render(){
      let small=(
        <input type="text" className="forminputproduct-text" name={this.props.name} id={this.props.id} value={this.props.value} onChange={this.props.OnChange}  required/>
      )
      if(this.props.isLarge){
        small=(
        <input type="text" className="forminputproduct-text-large" name={this.props.name} id={this.props.id} value={this.props.value}  onChange={this.props.OnChange} required/>
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

import React, {Component} from 'react';

import './FormInputProduct.scss'


class FormInputProduct extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }

  componentDidMount(){
    
   }
  render(){
      return(
          <div className = "forminputproduct">
            <input className="forminputproduct-text" type="text"/>
            
          </div>
      );
  }
};




export default FormInputProduct;

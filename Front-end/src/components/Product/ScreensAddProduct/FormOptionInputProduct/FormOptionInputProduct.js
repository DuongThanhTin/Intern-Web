import React, {Component} from 'react';
import Select from 'react-select';

import './FormOptionInputProduct.scss'


const options = [
  { value: 'tshirt', label: 'tshirt' },
  { value: 'dress', label: 'dress' },
];
class FormOptionInputProduct extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }

  componentDidMount(){
    
   }
  render(){
      return(
          <div className = "formoptioninputproduct">
            <Select className="input" options={options}/>
          </div>
      );
  }
};




export default FormOptionInputProduct;

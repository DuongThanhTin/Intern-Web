import React, {Component} from 'react';
import './FormInput.css'


class FormInput extends Component {
  constructor(){
    super();
    this.state={
    }
  }


  render(){
      return(
          <div className = "FormInput">
            <div className="form-general">
                  <label className="form-label">{this.props.name}</label>
                  <div className="form-input">
                    <input
                      name={this.props.inputName}
                      id={this.props.inputId}
                      type={this.props.inputType}
                      value={this.props.inputValue}
                      onChange={this.props.inputOnChange}
                      className="form-input-text "
                      placeholder={this.props.inputPlacehodler}
                    />                 
                  </div>           
                </div>
          </div>
      );
  }
};




export default FormInput;

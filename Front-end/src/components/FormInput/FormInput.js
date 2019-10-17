import React, {Component} from 'react';
import './FormInput.scss'


class FormInput extends Component {
 

  render(){
      return(
          <div className = "forminput">
            <div className="form-general">
                  <label className="form-label">{this.props.name}</label>
                  <div className={this.props.borderInput}>
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

import React, {Component} from 'react';
import './ButtonHeader.scss'

class ButtonHeader extends Component {


  render(){
      let classNameButton= "button-content";
      if (this.props.onHandleChangeColor){
          classNameButton+=' button-change-color';
      }
      return (
        <div className="buttonheader">
            <button type="submit" className={classNameButton} >
                <div className="text">{this.props.buttonname}</div>
            </button>
         </div>
      );
  }
};




export default ButtonHeader;

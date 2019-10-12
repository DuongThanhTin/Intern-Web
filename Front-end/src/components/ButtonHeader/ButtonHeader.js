import React, {Component} from 'react';
import './ButtonHeader.css'

class ButtonHeader extends Component {
  constructor(){
    super();
    this.state={
    }
  }

  componentDidMount(){
  }


  render(){
      let classNameButton= "button-content";
      if (this.props.onHandleChangeColor){
          classNameButton+=' button-change-color';
      }
      return (
        <div className="ButtonHeader">
            <button type="submit" className={classNameButton}>
                <div className="text">{this.props.buttonname}</div>
            </button>
         </div>
      );
  }
};




export default ButtonHeader;

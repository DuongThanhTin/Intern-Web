import React, { Component } from "react";

import "./AddPhoto.scss";

class AddPhoto extends Component {
  constructor(props) {
    super(props);
    this.fileUpload = React.createRef();
  }
  handleClick = e => {
    this.inputElement.click();
  };
  render() {
    return (
      <div className="addphoto ">
        <div className="addphoto-edit" onClick={this.handleClick}>
          <img className="addphoto-image" src="images/icon/add.svg" alt="" />
          <div className="addphoto-text">Add Photo</div>
          <input
    
            accept="image/*"
            type="file"
            ref={input => (this.inputElement = input)}
          />
         
        </div>
      </div>
    );
  }
}

export default AddPhoto;

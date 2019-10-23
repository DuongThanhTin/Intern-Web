import React, { Component } from "react";


import "./AddPhoto.scss";

class AddPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      urlImage: "",
      isPhoto: false
    };
  }

  handleClick = e => {
    this.inputElement.click();
 
  };

  HandleAddPhoto = event => {
    let files = event.target.files;
    console.log("file", files[0].name);
    this.setState({
      urlImage: files[0].name,
      isPhoto: true
    });
    //this.props.handleValue(files[0].name)
  };

  HandleButtonCross = event => {
    event.preventDefault();
    this.setState({
      isPhoto: false
    });
  };

  render() {
    let isImage = (
      <div className="addphoto-edit" onClick={this.handleClick}>
        <img className="addphoto-image" src="images/icon/add.svg" alt="" />
        <div className="addphoto-text">Add Photo</div>
        <input
          id="file"
          style={{ display: "none" }}
          name={this.props.name}
          type="file"
          value={this.state.urlImage}
          ref={input => (this.inputElement = input)}
          onChange={this.HandleAddPhoto}
        />
      </div>
    );

    if (this.state.isPhoto) {
      let url = "images/" + this.state.urlImage;
      isImage = (
        <div className="addphoto-edit">
          <img className="addphoto-imageURL" src={url} alt="" />
          <div className="button-close">
            <img
              className="button-close-edit"
              src="images/icon/close-1.svg"
              onClick={this.HandleButtonCross}
              alt=""
            />
          </div>
        </div>
      );
    }
    return (
      <div className="addphoto" onSubmit={this.onSubmit}>
        {isImage}
      </div>
    );
  }
}

export default AddPhoto;

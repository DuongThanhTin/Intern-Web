import React, {Component} from 'react';

import './AddPhoto.scss'

class AddPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="addphoto">
            <div className="addphoto-edit">
                <img className="addphoto-image" src="images/icon/add.svg" alt=""/>
                <div className="addphoto-text">Add Photo</div>
            </div>
      </div>
    );
  }
};




export default AddPhoto;

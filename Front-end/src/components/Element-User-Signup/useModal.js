import React, {Component} from 'react';
import {Button, Modal,  } from 'react-bootstrap';

class useModal extends Component {
  constructor(props){
    super(props);
    this.state={
      say:'',
    
    }
  }

  render(){
  
      return(
          <div className = "useModal">
               <Modal
            {...this.props}
            centered
            className="Signup-Modal-main"
          >
            <Modal.Body>
              <p>Modal body text goes here.</p>
              <Button variant="secondary" onClick={this.props.onHide}>Close</Button>
              <Button variant="primary" onClick={this.props.onHide}>Save changes</Button>
            </Modal.Body>

            <div className="Signup-Modal-Footer">
              <div className="Signup-Modal-Footer-content">
                <ul  className="Signup-Modal-Footer-ul">
                  <li>Do you have account?</li>
                  <li>Log In</li>
                </ul>
              </div>
            </div> 
          </Modal>
          </div>
      );
  }
};




export default useModal;

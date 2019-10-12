import React, {Component} from 'react';
import './PageFooter.css'

class PageFooter extends Component {
  constructor(){
    super();
    this.state={
    }
  }

  componentDidMount(){
  }


  render(){
      return (
        <div className="PageFooter ">
          <div className="container-header ">
            <div className="Edit-Footer">
              <div className="Logo-Footer">
                <img
                  className="Logo--Footericon"
                  src="images/icon/logo.png"
                  alt=""
                />
              </div>
              <div className="Footer-Character">
                <ul className="Footer-ul">
                  <li>
                    <p>Home</p>
                  </li>
                  <li>
                    <p>Products</p>
                  </li>
                  <li>
                    <p>Services</p>
                  </li>
                  <li>
                    <p>About Us</p>
                  </li>
                  <li>
                    <p>Help</p>
                  </li>
                  <li>
                    <p>Contacts </p>
                  </li>
                </ul>
              </div>
              <div className="Footer-Logo-icon">
                <img src="images/icon/twitter-icon.svg" alt="" />
                <img src="images/icon/facebook-icon.svg" alt="" />
                <img src="images/icon/instagram-6-icon.svg" alt="" />
              </div>
            </div>

            <div className="Edit-Footer-2">
              <div className="Footer-Character-1">
                <div className="Footer-2">
                  <ul className="Footer-ul-1">
                    <li>
                      <p>Home</p>
                    </li>
                    <li>
                      <p>Products</p>
                    </li>
                    <li>
                      <p>Services</p>
                    </li>
                    <li>
                      <p>About Us</p>
                    </li>
                    <li>
                      <p>Help</p>
                    </li>
                    <li>
                      <p>Contacts </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="Footer-Character-2">
                <ul className="Footer-ul-2">
                  <li className="">
                    <p>Privacy Policy</p>
                  </li>
                  <li className="">
                    <p>Terms & Conditions</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
  }
};




export default PageFooter;

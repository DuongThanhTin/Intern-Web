import React, {Component} from 'react';
import './PageFooter.scss'

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
        <div className="pagefooter ">
          <div className="container-header ">
            <div className="edit-footer">
              <div className="logo-footer">
                <img
                  className="logo-footericon"
                  src="images/icon/logo.png"
                  alt=""
                />
              </div>
              <div className="footer-character">
                <ul className="footer-ul">
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
              <div className="footer-logo-icon">
                <img src="images/icon/twitter-icon.svg" alt="" />
                <img src="images/icon/facebook-icon.svg" alt="" />
                <img src="images/icon/instagram-6-icon.svg" alt="" />
              </div>
            </div>

            <div className="edit-footer-2">
              <div className="footer-wordline-1">
                <div className="footer-2">
                  <ul className="footer-ul-1">
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
              <div className="footer-wordline-2">
                <ul className="footer-ul-2">
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

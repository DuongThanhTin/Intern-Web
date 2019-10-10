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
      return(

          <div className = "PageFooter ">
            <div className = "container-header ">
              <div className="Edit-Footer">
                
                <div className="Logo-Footer">
                  <img className="Logo--Footericon" src="images/icon/logo.png" alt=""/>
                </div>
                <div className="Footer-Character">
                  <ul className="Footer-ul">
                    <li className="" >
                      <a href="/">Home</a>                 
                    </li> 
                    <li className="" >
                      <a href="/">Products</a>                 
                    </li> 
                    <li className="" >
                      <a href="/">Services</a>                 
                    </li>
                    <li className="" >
                      <a href="/">About Us</a>                 
                    </li>  
                    <li className="" >
                      <a href="/">Help</a>                 
                    </li> 
                    <li className="" >
                      <a href="/">Contacts  </a>                 
                    </li> 
                  </ul>
                </div>
                <div className="Footer-Logo-icon">
                  <img src="images/icon/twitter-icon.svg" alt=""/>
                  <img src="images/icon/facebook-icon.svg"alt=""/>
                  <img src="images/icon/instagram-6-icon.svg"alt=""/>
                </div>
              </div>

              <div className="Edit-Footer-2">
                <div className="Footer-Character-2">
                    <ul className="Footer-ul-1">
                      <li className="" >
                        <a href="/">Home</a>                 
                      </li> 
                      <li className="" >
                        <a href="/">Products</a>                 
                      </li> 
                      <li className="" >
                        <a href="/">Services</a>                 
                      </li>
                      <li className="" >
                        <a href="/">About Us</a>                 
                      </li>  
                      <li className="" >
                        <a href="/">Help</a>                 
                      </li> 
                      <li className="" >
                        <a href="/">Contacts  </a>                 
                      </li> 
                    </ul>
                  </div>
                  <div className="Footer-Character-2">
                    <ul className="Footer-ul-2">
                      <li className="" >
                        <a href="/">Privacy Policy</a>                 
                      </li> 
                      <li className="" >
                        <a href="/">Terms & Conditions</a>                 
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

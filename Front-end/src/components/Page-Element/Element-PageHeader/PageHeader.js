import React, {Component} from 'react';
import './PageHeader.css'

class PageHeader extends Component {
  constructor(){
    super();
    this.state={
    }
  }

  componentDidMount(){
  }

  onHandleSignup= event=>{
    event.preventDefault();
    console.log('hello')  
  }

  render(){
      return(

          <div className = "PageHeader">       
            <div className="Header-1">
              <div className="container-header">
                <div className="edit-header">
                  <form>
                    <div className="search-input">
                      <input className="search-text" type="text" placeholder="Search"/> 
                      <a className="search-button" href="/">
                      <img className="icon-search" src="images/icon/search.png" alt=""/>
                      </a>
                    </div>     
                  </form>
                  <div className="Logo">
                   <img className="Logo-icon" src="images/icon/logo.png" alt=""/>
                  </div>

                  <div className="register-btn">
                    <a className="register" href="/" onClick={this.onHandleSignup} >Register</a>
                    <button className="button-login">
                      <div className="button-text"><strong>Log In </strong></div>
                    </button>
                  </div>
                  </div>
              </div>
            </div>
            
            <div className="Header-2">
              <ul className="ul-menu">
                <li className="dropdown">
                  <span>Men</span>
                  <img className="dropdown-images" src="images/icon/arrow.png" alt=""/>  
                    <ul className="dropdown-content dropdown-edit">
                      <div className="dropdown-characters">
                        <li><a href="/">Tops</a></li>
                        <li><a href="/">Bottoms</a></li>
                        <li><a href="/">Dresses</a></li>
                        <li><a href="/">Jackets</a></li>
                        <li><a href="/">Shoes</a></li>
                        <li><a href="/">Accesories</a></li>
                        <li><a href="/">Sale</a></li>
                      </div>
                    </ul>
                </li> 
                <li className="dropdown">
                  <span>Ladies</span>
                  <img className="dropdown-images" src="images/icon/arrow.png" alt=""/>  
                    <ul className="dropdown-content dropdown-edit">
                      <div className="dropdown-characters">
                        <li><a href="/">Tops</a></li>
                        <li><a href="/">Bottoms</a></li>
                        <li><a href="/">Dresses</a></li>
                        <li><a href="/">Jackets</a></li>
                        <li><a href="/">Shoes</a></li>
                        <li><a href="/">Accesories</a></li>
                        <li><a href="/">Sale</a></li>
                      </div>
                    </ul>
                </li> 
                <li className="dropdown">
                  <span>Girls</span>
                  <img className="dropdown-images" src="images/icon/arrow.png" alt=""/>  
                    <ul className="dropdown-content dropdown-edit">
                      <div className="dropdown-characters">
                        <li><a href="/">Tops</a></li>
                        <li><a href="/">Bottoms</a></li>
                        <li><a href="/">Dresses</a></li>
                        <li><a href="/">Jackets</a></li>
                        <li><a href="/">Shoes</a></li>
                        <li><a href="/">Accesories</a></li>
                        <li><a href="/">Sale</a></li>
                      </div>
                    </ul>
                </li> 
                <li className="dropdown">
                  <span>Boys</span>
                  <img className="dropdown-images" src="images/icon/arrow.png" alt=""/>  
                    <ul className="dropdown-content dropdown-edit">
                      <div className="dropdown-characters">
                        <li><a href="/">Tops</a></li>
                        <li><a href="/">Bottoms</a></li>
                        <li><a href="/">Dresses</a></li>
                        <li><a href="/">Jackets</a></li>
                        <li><a href="/">Shoes</a></li>
                        <li><a href="/">Accesories</a></li>
                        <li><a href="/">Sale</a></li>
                      </div>
                    </ul>
                </li> 
               
              </ul>
            </div>
           
          </div>
      );
  }
};




export default PageHeader;

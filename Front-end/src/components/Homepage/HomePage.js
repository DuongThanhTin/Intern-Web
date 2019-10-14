import React, {Component} from 'react';
//import axios from 'axios';

import './HomePage.scss'
import PageHeader from '../PageHeader/PageHeader'
import PageBanner from '../PageBanner/PageBanner';
import PageFooter from '../PageFooter/PageFooter';



class HomePage extends Component {
  constructor(props){
    super(props);
    this.state={
      say:'',
    
    }
  }

  //Đã lấy được dữ liệu từ server gửi lên
  componentDidMount(){
  }

  

  render(){
  
      return(
          <div className = "homepage">
              <PageHeader onSubmitRegister={this.onSubmitRegister} onSubmitLogin={this.onSubmitLogin}/> 
              <PageBanner/>
              <PageFooter/>
          </div>
      );
  }
};




export default HomePage;

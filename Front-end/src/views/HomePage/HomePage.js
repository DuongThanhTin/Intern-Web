import React, {Component} from 'react';
//import axios from 'axios';




//import './HomePage.css'
//import PageHeader from '../../components/PageHeader/PageHeader'
//import PageBanner from '../../components/PageBanner/PageBanner';
//import PageFooter from '../../components/PageFooter/PageFooter';

import ComponentHomepage from '../../components/Homepage/HomePage';

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
          <div className = "HomePage">
            <ComponentHomepage/>
          </div>
      );
  }
};




export default HomePage;

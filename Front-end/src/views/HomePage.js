import React, {Component} from 'react';
import axios from 'axios';

import './HomePage/HomePage.css'
import PageHeader from '../components/Page-Element/Element-PageHeader/PageHeader'
import PageBanner from '../components/Page-Element/Element-PageBanner/PageBanner';
import PageFooter from '../components/Page-Element/Element-PageFooter/PageFooter';
import Signup from '../components/Page-Element/Element-User-Signup/Element-Signup';



class HomePage extends Component {
  constructor(props){
    super(props);
    this.state={
      say:'',
    }
  }

  //Đã lấy được dữ liệu từ server gửi lên
  componentDidMount(){
    axios.get('http://localhost:4000')
    .then(result=>this.setState({say:result.data.sayHi}))
  }
  onClick=()=>{
    console.log(this.state.say)
  }

  onHandleSignup=()=>{
    
  }

  render(){
      return(
          <div className = "HomePage">
              <PageHeader onHandleSignup={this.onHandleSignup}/>             
              <PageBanner/>
              <PageFooter/>
          
              
          </div>
      );
  }
};




export default HomePage;

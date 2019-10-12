import React, {Component} from 'react';
import axios from 'axios';




import './HomePage.css'
import PageHeader from '../../components/PageHeader/PageHeader'
import PageBanner from '../../components/PageBanner/PageBanner';
import PageFooter from '../../components/PageFooter/PageFooter';



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

  

  render(){
  
      return(
          <div className = "HomePage">
              
              <PageHeader onSubmitRegister={this.onSubmitRegister}/> 
              <PageBanner/>
              <PageFooter/>
          </div>
      );
  }
};




export default HomePage;

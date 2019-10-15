import React, {Component} from 'react';
//import axios from 'axios';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import ComponentHomepage from '../../components/Homepage/HomePage';
import ScreensAddProduct from '../../components/Product/ScreensAddProduct/ScreensAddProduct';
import Photo from '../../components/Product/ScreensAddProduct/AddProduct/AddPhoto/AddPhoto';
import Input from '../../components/Product/ScreensAddProduct/FormOptionInputProduct/FormOptionInputProduct';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state={
    
    }
  }

  //Đã lấy được dữ liệu từ server gửi lên
  componentDidMount(){
    
   }


  render(){
      return (
        <BrowserRouter>
          <div>
            <Route exact path="/" component={ComponentHomepage} />
          </div>
        </BrowserRouter>
      );
  }
};




export default HomePage;

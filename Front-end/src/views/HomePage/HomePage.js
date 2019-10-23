import React, { Component } from "react";
//import axios from 'axios';

import "./HomePage.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import PageBanner from "../../components/PageBanner/PageBanner";
import PageFooter from "../../components/PageFooter/PageFooter";

import PageBannerListProduct from "../../components/PageBannerListProduct/PageBannerListProduct";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //Đã lấy được dữ liệu từ server gửi lên
  componentDidMount() {}
  render() {
    return (
      <Router>
      <div className="homepage">
      
          <PageHeader
            onSubmitRegister={this.onSubmitRegister}
            onSubmitLogin={this.onSubmitLogin}
          />
          <Switch>
            <Route  exact path="/" component={PageBanner} />
            <Route  path="/categories" component={PageBannerListProduct} />
          </Switch>
          <PageFooter />
        
      </div>
      </Router>
    );
  }
}

export default HomePage;

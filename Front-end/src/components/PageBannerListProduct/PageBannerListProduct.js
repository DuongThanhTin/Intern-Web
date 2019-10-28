import React, { Component } from "react";
//import axios from 'axios';

import "./PageBannerListProduct.scss";
import MenuListProduct from "../MenuListProduct/MenuListProduct";
import ListProduct from "../ListProduct/ListProduct";
import ProductContainer from "../../containers/ProductContainer"
import ListProductCategory from "../ListProductCategory/ListProductCategory";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

class PageBannerListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      tokenrole: null,
      token: null,
      userID: ""
    };
  }
  componentDidMount() {
    const token = localStorage.getItem("token");
    const userID = localStorage.getItem("userID");
    const tokenrole = localStorage.getItem("tokenrole");
    if (!token) {
      return;
    } else {
      this.setState({
        isAuth: true,
        token: token,
        userID: userID,
        tokenrole: tokenrole
      });
    }
    
  }
  render() {
    const {match}= this.props;
    //console.log(match.url)
    return (
      <Router>
        <div className="pagebanner-product">
          <MenuListProduct />

          <Switch>
            <Route exact path="/categories" component={ProductContainer} />
            <Route
              path="/categories/:id"
              render={props => (
                <ListProductCategory
                  {...props}
                  userID={this.state.userID}
                  token={this.state.token}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default PageBannerListProduct;

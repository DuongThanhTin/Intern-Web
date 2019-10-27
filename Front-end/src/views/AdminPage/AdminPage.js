import React, { Component } from "react";

import AddProduct from "../../components/AddProduct/AddProduct";
import Menu from "../../components/Menu/Menu";
import Product from "../../components/AdminProduct/AdminProduct";

import "./AdminPage.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class AdminPage extends Component {
  render() {
    return (
      <Router>
        <div className="adminpage">
          <Menu />
          <Switch>
            <Route exact path="/admin/addproduct" component={AddProduct} />
            <Route exact path="/admin" component={Product} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AdminPage;

import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "./views/Homepage/HomePage";
import AddProduct from "./views/AddProductPage/AddProductPage";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/addproduct" component={AddProduct} />
        </Switch>
      </div>
    );
  }
}

export default App;

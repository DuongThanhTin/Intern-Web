import React, { Component } from "react";
import { Route, Switch,Redirect } from "react-router-dom";

import Homepage from "./views/Homepage/HomePage";
import AdminPage from "./views/AdminPage/AdminPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      tokenrole:null,
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
      this.setState({ isAuth: true, token: token, userID: userID, tokenrole: tokenrole });
    }
  }

  render() {
    const {tokenrole} = this.state;
    let routes;
    if(tokenrole==='admin'){
      routes=(<Route  path="/admin" component={AdminPage}/>)
    }
    else if(tokenrole==="customer"){
      routes=(<Redirect to="/"/>)
    }
    return (
      <div className="App">
      
          <Route exact path="/" component={Homepage}/>
          <Route  path="/categories" component={Homepage}/>  
          <Route  path="/admin" component={AdminPage}/>
     
      </div>
    );
  }
}

export default App;

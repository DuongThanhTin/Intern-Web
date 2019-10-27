import React, { Component } from "react";
import { Route, Switch,Redirect } from "react-router-dom";

import Homepage from "./views/Homepage/HomePage";
import AdminPage from "./views/AdminPage/AdminPage";
import CartHeader from "../src/components/CartHeader/CartHeader"
      
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
      return <Redirect to="/"/>;
    } else {
      this.setState({ isAuth: true, token: token, userID: userID, tokenrole: tokenrole });
    }
  }

  render() {
    const {token,tokenrole,isAuth} = this.state;

    let routes;
    if( tokenrole ==="customer"||token===null){
      routes=(
        <Switch>
          <Redirect to="/"/>
        </Switch>
      )
    }
    else if(tokenrole==="admin"){
      routes=(
        <Switch>
          <Route path="/admin" render ={()=>(<AdminPage/>)}/>
        </Switch>

      )
    }

    return (
      <div className="App">
          <Route exact path="/" component={Homepage}/>
          <Route  path="/categories" component={Homepage}/> 
          {routes}
          <Route  path="/admin" render ={()=>(<AdminPage/>)}/>
      
      </div>
    );
  }
}

export default App;

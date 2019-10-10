import React, {Component} from 'react';
import  axios from 'axios'

class App extends Component {
  constructor(){
    super();
    this.state={
      users: [
        { name:"Say hi"},
        { name:"Godlike", age :20}
      ],

    }
  }

  componentDidMount(){
    
    fetch('http://localhost:4000/users')
    .then(response=>response.json())
    .then(res=>{
      if(res && res.data){
        console.log(res.data)
        this.setState({
          users: [...this.state.users]
        })
      }
    })
     
    axios.get('http://localhost:4000/users')
    .then((res) => console.log(res.data));
  }

  renderUsers(){
    return this.state.users.map((val,key)=>{
      return (
        <div key={key} >{val.name} and {val.age}</div>
      )
    })
  }



  buttonclick = ()=>{
    console.log(this.renderUsers())
  }
  render(){
      return(
          <div className = "App">
            <div>{this.renderUsers()}</div>
            <button id='users' onClick={this.buttonclick}>Users</button>

          </div>
      );
  }
};




export default App;

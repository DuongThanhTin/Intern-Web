import React, {Component} from 'react';


export const API_Context= React.createContext();
export class API_Provider extends Component {
  constructor(props){
    super(props);
    this.state={
       
    }
  }

  render(){
 
      return(
        <API_Context.Provider value={{
            cart: this.state.cart,
            setCart: this.state.setCart,
        }}>
        <div className ="CartProvider">
        </div>
        {this.props.children}
        </API_Context.Provider>
      );
  }
};




export default API_Provider;

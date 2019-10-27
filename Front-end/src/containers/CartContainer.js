import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CartHeader from '../components/CartHeader/CartHeader'
import ProductCartItem from '../components/ProductCartItem/ProductCartItem'

class CartContainer extends Component{
    render(){
        var {cart}=this.props;
        return(
            <div>
            <CartHeader showCartQuantity={this.showCartQuantity(cart)}>
                {this.showCartItem(cart)}
            </CartHeader>
         
            </div>
        )
    }

    showCartItem = (cart)=>{
        let result;
        console.log(cart)
        if(cart.length>0){
         result = cart.map((item,index)=>{
            return(
                <ProductCartItem key={index} item={item} />
            )
        })
        return result;
    }
}

    showCartQuantity = (cart)=>{
        return cart.length;
    }

}


//Connect
const mapStatetoProps = state =>{
    return{
        cart: state.cart,
    }
}

export default connect(mapStatetoProps,null)(CartContainer);
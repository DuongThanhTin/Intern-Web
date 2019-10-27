import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListProduct from '../components/ListProduct/ListProduct'
import {ADD_TO_CART} from '../actions/actions'

class ProductContainer extends Component{
    render(){
        var {HandleAddtoCart} = this.props
        return(
            <ListProduct HandleAddtoCart={HandleAddtoCart}/>            
        )
    }

}

ProductContainer.propTypes={
    products: PropTypes.arrayOf(PropTypes.shape({
        _id:PropTypes.string,
        name:PropTypes.string,
        category:PropTypes.string,
        size:PropTypes.string,
        color:PropTypes.string,
        price:PropTypes.number,
        brand:PropTypes.string,
        description:PropTypes.string,
       })).isRequired
}

//Connect
const mapStatetoProps = state =>{
    return{
        products: state.products,
    }
}

const mapDispatchtoProps=(dispatch,props)=>{
    return{
        HandleAddtoCart: (product)=>{
            dispatch(ADD_TO_CART(product,1));
        }
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(ProductContainer);

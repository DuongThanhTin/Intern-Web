import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CartHeader from "../components/CartHeader/CartHeader";
import ProductCartItem from "../components/ProductCartItem/ProductCartItem";

class CartContainer extends Component {
  render() {
    var { cart } = this.props;
    return (
      <div>
        <CartHeader>
          {this.showCartItem(cart)}
        </CartHeader>
      </div>
    );
  }

  showCartItem = cart => {
    let result;
    console.log(cart);
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        if (item.product) {
          let nameItem=item.product.name;
          let priceItem=item.product.price;
          let sizeItem;
          item.product.size.map((size, index) => {
            sizeItem = size.label;
          });
          let colorItem;
          item.product.color.map((color, index) => {
            colorItem = color.label;
          });

          return (
            <ProductCartItem
              key={index}
              item={item}
              name={nameItem}
              price={priceItem}
              size={sizeItem}
              color={colorItem}
            />
          );
        }
      });
      return result;
    }
  };

  showCartQuantity = cart => {
    return cart.length;
  };
}

//Connect
const mapStatetoProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(
  mapStatetoProps,
  null
)(CartContainer);

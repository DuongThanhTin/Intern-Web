import React,{Component} from "react";
import PropTypes from "prop-types";
import "./ProductCartItem.scss";

class ProductCartItem extends Component {
  render() {
    var {name,price,color,size,item} = this.props
    return (
      <div className="productcartitem">
        <div className="productcartitem-image">
          <img src="/images/example-3.jpg" alt="" />
        </div>
        <div className="productcartitem-content">
          <div className="content-title">{name}</div>
          <div className="content-down">
            <div className="content-down-text-left">&#36;{price}</div>
            <div className="content-down-text-right">
              {size} - {color} - {item.quantity} pcs
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProductCartItem.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string
};

export default ProductCartItem;

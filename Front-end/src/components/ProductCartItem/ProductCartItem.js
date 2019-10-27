import React,{Component} from "react";
import PropTypes from "prop-types";
import "./ProductCartItem.scss";

class ProductCartItem extends Component {
  render() {
    var {item} = this.props
    return (
      <div className="productcartitem">
        <div className="productcartitem-image">
          <img src="/images/example-3.jpg" alt="" />
        </div>
        <div className="productcartitem-content">
          <div className="content-title">{item.name}</div>
          <div className="content-down">
            <div className="content-down-text-left">&#36;{item.price}</div>
            <div className="content-down-text-right">
              {item.size}-{item.color}-{item.quantity} pcs
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

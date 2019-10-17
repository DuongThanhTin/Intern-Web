import React, { Component } from "react";

import "./FormOptionInputProduct.scss";
import Select from "react-select";

const options = [
  { label: "Chocolate", value: "chocolate" },
  { label: "Vanilla", value: "vanilla" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Caramel", value: "caramel" },
  { label: "Cookies and Cream", value: "cookiescream" },
  { label: "Peppermint", value: "peppermint" }
];

class FormOptionInputProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      removeSelected: true,
      stayOpen: false,
      value: [],
      rtl: false
    };
  }
  handleMultiChange = event => {
    this.setState({
      multivalue: [...event.target.value]
    });
  };
  handleSelectChange = value => {
    console.log("You've selected:", value);
    this.setState({ value: value });
  };
  toggleRt = e => {
    let rtl = e.target.checked;
    this.setState({ rtl });
  };
  render() {
    const selectedOptionsStyles = {
      color: "#3d3d3f",
      backgroundColor: "#f6f6f6	"
    };
    const optionsListStyles = {
      backgroundColor: "#dff0d8",
      color: "#3c763d"
    };
    const {  stayOpen, value } = this.state;

    return (
      <div className="formoptioninputproduct">
        <Select
          className="input"
          closeOnSelect={!stayOpen}
          multi
          onChange={this.handleSelectChange}
          options={this.props.optionList}
          placeholder="Select..."
          removeSelected={this.state.removeSelected}
          rtl={this.state.rtl}
          simpleValue
          value={value}
        />
      </div>
    );
  }
}

export default FormOptionInputProduct;

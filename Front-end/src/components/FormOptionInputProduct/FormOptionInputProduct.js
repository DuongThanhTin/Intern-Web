import React, { Component } from "react";

import "./FormOptionInputProduct.scss";
import Select from "react-select";

class FormOptionInputProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: []
    };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption: selectedOption });
    this.props.handleValue(selectedOption);
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <div className="formoptioninputproduct">
        <Select
          isMulti
          className="input"
          name={this.props.name}
          value={selectedOption}
          onChange={this.handleChange}
          options={this.props.optionList}
          required
        />
      </div>
    );
  }
}

export default FormOptionInputProduct;

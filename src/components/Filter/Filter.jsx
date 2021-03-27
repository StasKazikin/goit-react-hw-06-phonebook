import { Component } from "react";
import PropTypes from "prop-types";
import { label, input } from "./Filter.module.scss";

class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;

    return (
      <label className={label}>
        Find contacts by name
        <input
          className={input}
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
        ></input>
      </label>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

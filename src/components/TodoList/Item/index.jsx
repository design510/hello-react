import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Item extends Component {
  static propTypes = {
    status: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  };
  onChange = (e) => {
    const { onChange } = this.props;
    onChange(e.target.value, e.target.checked);
  };
  render() {
    return (
      <div className="todo-list-item">
        <input
          type="checkbox"
          className="todo-list-item__checkbox"
          value={this.props.name}
          name={this.props.name}
          checked={this.props.status}
          onChange={this.onChange}
        />
        <span className="todo-list-item__text">{this.props.name}</span>
      </div>
    );
  }
}

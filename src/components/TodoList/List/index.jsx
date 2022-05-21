import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "../Item";

export default class List extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
  };
  onChange = (name, status) => {
    const { onChange } = this.props;
    onChange(name, status);
  };
  render() {
    return (
      <div className="todo-list-box">
        {this.props.list.map((item) => {
          return (
            <Item
              key={item.name}
              status={item.status}
              name={item.name}
              onChange={this.onChange}
            ></Item>
          );
        })}
      </div>
    );
  }
}

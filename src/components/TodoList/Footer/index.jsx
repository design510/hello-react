import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Footer extends Component {
  static propTypes = {
    checkedNumber: PropTypes.number.isRequired,
    listNumber: PropTypes.number.isRequired,
  };
  onChange = (e) => {
    console.log(e.target.checked);
  };
  render() {
    return (
      <div className="todo-list-footer">
        <input
          type="checkbox"
          checked={this.props.checkedNumber === this.props.listNumber}
          onChange={this.onChange}
        />
        <span className="toto-list-footer__text">
          已完成{this.props.checkedNumber} / {this.props.listNumber}
        </span>
      </div>
    );
  }
}

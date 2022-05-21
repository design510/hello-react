import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Header extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };
  search = (e) => {
    const { onSearch } = this.props;
    if (e.keyCode === 13) {
      onSearch(e.target.value);
    }
  };
  render() {
    return (
      <div className="todo-list-header">
        <input className="todo-list-header__input" onKeyUp={this.search} />
      </div>
    );
  }
}

import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import './index.css'

export default class index extends Component {
  static propTypes = {
    nickName: PropTypes.string,
  };

  render() {
    return (
        <Fragment>
           <div className="hello">{this.props.nickName}</div>
        </Fragment>
    )
  }
}

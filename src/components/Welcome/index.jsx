import React, { Component, Fragment } from "react";
import hello from "./index.module.css";

export default class Welcome extends Component {
  state = {
    welcomeList: [{ id: 1, name: "张三" }],
  };
  addWelcome = () => {
    const { welcomeList } = this.state;
    const newList = [...welcomeList, { id: welcomeList.length+1, name: `李四${welcomeList.length+1}` }];
    this.setState({
      welcomeList: newList,
    });
  }
  render() {
    return (
      <Fragment>
        <div className={hello.welcome} onClick={this.addWelcome}>Welcome，{this.props.name}</div>
        <ul>
          {this.state.welcomeList.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </Fragment>
    );
  }
}

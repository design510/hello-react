import React, { Component } from "react";
import Header from "../Header";
import List from "../List";
import Footer from "../Footer";

export default class Container extends Component {
  state = {
    list: [],
    checkedNumber: 0,
  };
  onSearch = (value) => {
    console.log(value);
    let { list } = this.state;
    const tempList = list.filter((item) => item.name === value);
    if (tempList.length === 0) {
      const newList = [...list, { status: false, name: value }];
      this.setState({ list: newList });
    } else {
      console.log("该事项已存在，请重新输入");
    }
  };
  onChange = (name, status) => {
    let { list } = this.state;
    const newList = list.map((item) => {
      if (item.name === name) {
        item.status = status;
      }
      return item;
    });
    this.setState({
      list: newList,
      checkedNumber: newList.filter((item) => item.status).length,
    });
    console.log(list);
  };
  render() {
    return (
      <div className="todo-list-container">
        <Header onSearch={this.onSearch}></Header>
        <List list={this.state.list} onChange={this.onChange}></List>
        <Footer
          checkedNumber={this.state.checkedNumber}
          listNumber={this.state.list.length}
        ></Footer>
      </div>
    );
  }
}

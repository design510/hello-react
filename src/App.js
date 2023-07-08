import "./App.less";
import React, { Component } from "react";
import { Button } from 'antd';
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Container from "./components/TodoList/Container";
import HelloToOne from "./components/FuncComponent";
import Login from "./pages/Login"
import User from "./pages/User"
import EditableTable from "./pages/User/EditableTable.tsx"

export default class App extends Component {
  saveDataFunc = (data) => {
    console.log(data)
  }
  render() {
    return (
      <div className="App">
        <EditableTable saveDataFunc={this.saveDataFunc}></EditableTable>
        <User></User>
        <Login></Login>
        <HelloToOne></HelloToOne>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <br />
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
        <Hello nickName="大家好呀！"></Hello>
        <Container />
        <Welcome name="React" />
      </div>
    );
  }
}

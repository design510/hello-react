import "./App.css";
import React, { Component } from "react";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Container from "./components/TodoList/Container";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello nickName="大家好呀！"></Hello>
        <Container />
        <Welcome name="React" />
      </div>
    );
  }
}

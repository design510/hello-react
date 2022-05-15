import "./App.css";
import React, { Component } from "react";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello nickName="大家好呀！"></Hello>
        <Welcome name="React" />
      </div>
    );
  }
}

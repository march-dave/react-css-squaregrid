import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import SquareGrid from "./SquareGrid";

class App extends Component {
  render() {
    return (
      <div className="App">
      <SquareGrid />
      </div>
    );
  }
}

export default App;
